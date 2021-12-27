<template>
	<view class="container">
		<view class="bluebox" v-if="JSON.stringify(weatherInfo)!='{}'">
			<view class="flex-row center" @click="changeCity">
				<image src="../../static/images/icon/icon-location-f.png" mode="" class="icon-location"></image>
				<view class="font-30 font-fff mg_lt_20 w-text center-text">
					{{weatherInfo.basic.location}}
				</view>
				<image src="../../static/images/icon/arrow-right.png" mode="" class="icon-arrow mg_lt_10"></image>
			</view>
			<view class="weather-box font-fff font-30 font-thin mg_tp_20 text-center">
				<view class="font-100">
					{{weatherInfo.now.tmp}}°C
				</view>
				<view>
					{{weatherInfo.now.cond_txt}} | <span
						class="mg_lt_20">空气质量：{{airInfo.code==200?airInfo.now.category:'--'}}</span>
				</view>
				<view class="mg_tp_10">
					{{weatherInfo.now.wind_dir}}{{weatherInfo.now.wind_sc}}级 湿度：{{weatherInfo.now.hum}}
				</view>
			</view>
		</view>

		<view class="forecast-box">
			<view class='forecast-box-title'>未来24小时天气预报</view>
			<view style="height: 900rpx;border-radius: 40rpx;">
				<l-echart ref="chart1"></l-echart>
			</view>
		</view>


		<!-- 		<view class="forecast-box">
			<view class='forecast-box-title'>未来24小时天气预报</view>
			<view class="forecast-box-12hour">
				<view style="height: 900rpx;border-radius: 40rpx;">
					<l-echart ref="chart1"></l-echart>
				</view>
			</view>
		</view> -->

		<view class="forecast-box">
			<view class='forecast-box-title'>未来2小时降水预测:</view>
			<view class='forecast-box-title-min'>描述：{{minsRain.summary}}</view>
			<view class="forecast-box-12hour">
				<view style="height: 600rpx;border-radius: 40rpx;">
					<l-echart ref="chart4"></l-echart>
				</view>
			</view>
		</view>

		<view class="forecast-box">
			<view class='forecast-box-title'>生活指数(南丁格尔玫瑰图)</view>
			<view class="forecast-box-content">
				<view style="height: 650rpx;position: static">
					<l-echart ref="chart2"></l-echart>
				</view>
			</view>
		</view>

		<view class="forecast-box">
			<view class='forecast-box-title'>当前空气质量指数：{{airInfo.now.aqi}}
				{{airInfo.code==200?airInfo.now.category:'--'}}
			</view>
			<view class="forecast-box-content">
				<view style="height: 500rpx;position: static">
					<l-echart ref="chart3" customStyle="z-index: 0;"></l-echart>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/components/l-echart/echarts';
	const app = getApp();
	export default {
		data() {
			return {
				location: '',
				lngLat: '',
				weatherInfo: {},
				airInfo: {},
				data24Hours: [],
				minsRain: {}
			}
		},
		async onShow() {
			uni.hideHomeButton();
			if (uni.getStorageSync('lngLat')) {
				this.lngLat = uni.getStorageSync('lngLat')
				this.location = uni.getStorageSync('location')
				this.getNowWeather();
				this.getNowAirQuality();
				this.showCharts1();
				this.showCharts2();
				this.showCharts3();
				this.showCharts4();
			} else {
				const lngLat = await this.getLocationWx();
				this.lngLat = lngLat;
				const location = this.getNowWeather();
				this.location = location;
				this.getNowAirQuality();
				this.showCharts1();
				this.showCharts2();
				this.showCharts3();
				this.showCharts4();
			}
		},
		onPullDownRefresh: function() {
			if (uni.getStorageSync('lngLat')) {
				this.lngLat = uni.getStorageSync('lngLat')
				this.location = uni.getStorageSync('location')
				this.getNowWeather();
				this.getNowAirQuality();
				this.showCharts1();
				this.showCharts2();
				this.showCharts3();
				this.showCharts4();
			} else {
				this.lngLat = this.getLocationWx();
				this.location = this.getNowWeather();
				this.getNowAirQuality();
				this.showCharts1();
				this.showCharts2();
				this.showCharts3();
				this.showCharts4();
			}; //重新加载onShow()
			uni.stopPullDownRefresh()
		},
		methods: {
			getLocationWx() {
				return new Promise((resolve, reject) => {
					let that = this;
					uni.authorize({
						scope: 'scope.userLocation',
						success() {
							uni.getLocation({
								type: 'wgs84',
								success: function(res) {
									let lng = res.longitude;
									let lat = res.latitude
									var lngLat = lng + ',' + lat;
									resolve(lngLat);
								}
							});
						},
						fail() {
							uni.getSetting({
								success: (res) => {
									let authSetting = res.authSetting
									if (authSetting['scope.userLocation']) {
										// 已授权
									} else {
										uni.showModal({
											title: '您未开启地理位置授权',
											content: '你的位置信息仅用于小程序天气展示',
											success: res => {
												if (res.confirm) {
													uni.openSetting()
												} else {
													console.log("用户拒绝提供位置信息");
													resolve(null);
												}
											}
										})
									}
								}
							})
						}
					})
				})
			},

			getNowWeather() {
				return new Promise((resolve) => {
					let that = this
					let url = 'https://free-api.heweather.net/s6/weather/now?location=' + that.lngLat +
						'&key=' + app
						.globalData.key
					uni.request({
						url: url,
						success(res) {
							that.weatherInfo = res.data.HeWeather6[0];
							if (uni.getStorageSync('location')) {
								that.weatherInfo.basic.location = uni.getStorageSync('location')
							}
							var location = that.weatherInfo.basic.location;
							console.log("地理位置:" + location);
							resolve(location);
						}
					})
				})
			},
			getNowAirQuality() {
				return new Promise((resolve) => {
					let that = this
					let url = 'https://devapi.qweather.com/v7/air/now?location=' + that.lngLat + '&key=' + app
						.globalData
						.key
					uni.request({
						url: url,
						success(res) {
							if (res.data.code == 200) {
								that.airInfo = res.data;
								// 为了下面的3/4环形图做额外的数据处理
								var air_info = res.data.now;
								resolve([{
										name: "PM10    ",
										value: parseFloat(air_info.pm10),
										unit: 'μg/m3'
									},
									{
										name: "PM2.5   ",
										value: parseFloat(air_info.pm2p5),
										unit: 'μg/m3'
									}, {
										name: "臭氧浓度",
										value: parseFloat(air_info.o3),
										unit: 'μg/m3'
									},
									{
										name: "二氧化氮",
										value: parseFloat(air_info.no2),
										unit: 'μg/m3'
									},
									{
										name: "二氧化硫",
										value: parseFloat(air_info.so2),
										unit: 'μg/m3'
									},
								])
							} else {
								console.log("获取空气指数数据失败");
							}
						}
					})
				})
			},
			get24hoursData() {
				return new Promise((resolve) => {
					let that = this;
					let url = 'https://devapi.qweather.com/v7/weather/24h?location=' + that.lngLat + '&key=' + app
						.globalData.key;
					uni.request({
						url: url,
						success(res) {
							if (res.data.code == 200) {
								var data24Hours = {
									date: [],
									data1: [],
									data2: [],
									data3: [],
								};
								var cities = ["温度(℃)", "降雨量(mm)", "降雨概率(%)"];
								for (var i = 0; i < res.data.hourly.length; i++) {
									var hour = res.data.hourly[i].fxTime.split("T")[1].split("+")[0].split(
										":")[0];
									data24Hours.date.push(hour);
									data24Hours.data1.push(parseInt(res.data.hourly[i].temp));
									data24Hours.data2.push(parseFloat(res.data.hourly[i].precip));
									data24Hours.data3.push(parseInt(res.data.hourly[i].pop));
									// if (i == 12) {
									// 	break;
									// }
								};
								resolve(data24Hours);
							} else {
								resolve(null);
								console.log("请求12小时数据失败");
							}
						}
					})
				})
			},
			getWeatherIndex() {
				return new Promise((resolve) => {
					let that = this;
					let url = 'https://devapi.qweather.com/v7/indices/1d?type=1,3,8,9,14,15,16,10&location=' + that
						.lngLat + '&key=' + app.globalData.key;
					var dataWI = [];
					uni.request({
						url: url,
						success(res) {
							if (res.data.code == 200) {
								var aqi = {};
								for (var i = 0; i < res.data.daily.length; i++) {
									if (res.data.daily[i].name == "空气污染扩散条件指数") {
										aqi = {
											name: res.data.daily[i].name,
											value: parseInt(res.data.daily[i].level)
										};
										continue;
									}
									dataWI.push({
										name: res.data.daily[i].name,
										value: parseInt(res.data.daily[i].level)
									})
								}
								dataWI.push(aqi);
								console.log("生活指数数据生成，正在返回..");
								resolve(dataWI);
							} else {
								console.log("3.生活指数数据请求失败");
							}
						}
					})
				})
			},
			getNowAQI() {
				return new Promise((resolve) => {
					let that = this;
					let url = 'https://devapi.qweather.com/v7/air/now?location=' + that.lngLat + '&key=' + app
						.globalData.key;
					var dataAQI = [];
					uni.request({
						url: url,
						success(res) {
							if (res.data.code == 200) {
								var now = res.data.now;

								dataAQI.push(aqi);
								console.log("空气质量数据生成，正在返回..");
								resolve(dataAQI);
							} else {
								console.log("4.空气质量数据请求失败");
							}
						}
					})
				})
			},

			getMinsRian() {
				return new Promise((resolve) => {
					let that = this;
					let url = 'https://devapi.qweather.com/v7/minutely/5m?location=' + that.lngLat + '&key=' + app
						.globalData.key;
					var minutes = [];
					var precips = [];
					uni.request({
						url: url,
						success(res) {
							if (res.data.code == 200) {
								// 未来2小时 每5分钟一次
								var minutely = res.data.minutely;
								that.minsRain.summary = res.data.summary;

								for (var i = 0; i < minutely.length; i++) {
									minutes.push(minutely[i].fxTime.split("T")[1].split("+")[0]);
									precips.push(parseFloat(minutely[i].precip));
								}
								console.log("降雨量数据生成，正在返回..");
								resolve({
									fxTime: minutes,
									precip: precips
								});
							} else {
								console.log("2.降雨量数据请求失败");
							}
						}
					})
				})
			},
			changeCity() {
				uni.redirectTo({
					url: "../city/city"
				})
			},
			toCover() {
				uni.redirectTo({
					url: "../cover/cover"
				})
			},

			async showCharts1() {
				const data24Hour = await this.get24hoursData();
				const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
				this.$refs.chart1.init(config => {
					const {
						canvas
					} = config;
					const chart = echarts.init(canvas, null, config);

					var date = data24Hour.date;
					var data1 = data24Hour.data1;
					var data2 = data24Hour.data2;
					var data3 = data24Hour.data3;
					var cities = ["温度(℃)", "降雨量(mm)", "降雨概率(%)"];
					var option = {
						backgroundColor: '#fff',
						title: {
							text: '气温变化曲线',
							textStyle: {
								fontSize: 12,
								fontWeight: 400,
							},
							left: 'center',
							top: '5%',
							show: false,
						},
						legend: {
							x: 'center',
							y: 'top',
							show: true,
							top: '5%',
							right: '5%',
							itemWidth: 6,
							itemGap: 20,
							textStyle: {
								color: '#556677',
							},
							data: cities,
							// data: ['预估净利润', '实时均价', '目标成本'],
						},
						tooltip: {
							trigger: 'axis',
							triggerOn: 'mousemove|click',
							axisPointer: {
								label: {
									formatter: '时间: {value}时00分',
									backgroundColor: '#fff',
									color: '#556677',
									borderColor: 'rgba(0,0,0,0)',
									shadowColor: 'rgba(0,0,0,0)',
									shadowOffsetY: 0,
								},
								lineStyle: {
									width: 0,
								},
							},
							backgroundColor: '#fff',
							textStyle: {
								color: '#5c6c7c',
							},
							padding: [10, 10],
							extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
						},
						grid: {
							top: '15%',
							y2: 88,
						},
						dataZoom: [{
								type: 'inside',
								start: 0,
								end: 100,
							},
							{
								start: 0,
								end: 100,
							},
						],
						xAxis: [{
							type: 'category',
							name: '时',
							data: date,
							axisLine: {
								show: true,
								lineStyle: {
									color: '#DCE2E8',
								},
							},
							axisTick: {
								show: true,
							},
							axisLabel: {
								interval: 'auto',
								textStyle: {
									color: '#556677',
								},
								// 默认x轴字体大小
								fontSize: 12,
								// margin:文字到x轴的距离
								margin: 15,
							},
							axisPointer: {
								label: {
									// padding: [11, 5, 7],
									padding: [0, 0, 10, 0],
									/*
					                    除了padding[0]建议必须是0之外，其他三项可随意设置
					
					                    和CSSpadding相同，[上，右，下，左]
					
					                    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同
					
					                    padding[2]的10:
					
					                    10 = 文字距下边线的距离 + 下边线的宽度
					
					                    如：UI图中文字距下边线距离为7 下边线宽度为2
					
					                    则padding: [0, 0, 9, 0]
					
					                                */
									// 这里的margin和axisLabel的margin要一致!
									margin: 15,
									// 移入时的字体大小
									fontSize: 12,
									backgroundColor: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 0,
										y2: 1,
										colorStops: [{
												offset: 0,
												color: '#fff', // 0% 处的颜色
											},
											{
												// offset: 0.9,
												offset: 0.86,
												/*
					                0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
					
					                                        */
												color: '#fff', // 0% 处的颜色
											},
											{
												offset: 0.86,
												color: '#33c0cd', // 0% 处的颜色
											},
											{
												offset: 1,
												color: '#33c0cd', // 100% 处的颜色
											},
										],
										global: false, // 缺省为 false
									},
								},
							},
							splitLine: {
								show: true,
								lineStyle: {
									type: 'dashed',
								},
							},
							boundaryGap: false,
						}, ],
						yAxis: [{
							type: 'value',
							name: '',
							// nameTextStyle: {
							//     color: '#9effff',

							// },
							axisTick: {
								show: false,
							},
							axisLine: {
								show: true,
								lineStyle: {
									color: '#DCE2E8',
								},
							},
							axisLabel: {
								textStyle: {
									color: '#556677',
								},
							},
							splitLine: {
								show: true,
								lineStyle: {
									type: 'dashed',
								},
							},
						}, ],
						series: [{
								name: cities[0],
								type: 'line',
								data: data1,
								symbolSize: 1,
								symbol: 'circle',
								smooth: true,
								yAxisIndex: 0,
								showSymbol: false,
								emphasis: {
									focus: 'series',
								},
								lineStyle: {
									width: 5,
									// color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
									//     {
									//         offset: 0,
									//         color: '#9effff',
									//     },
									//     {
									//         offset: 1,
									//         color: '#9E87FF',
									//     },
									// ]),
									shadowColor: 'rgba(158,135,255, 0.3)',
									shadowBlur: 10,
									shadowOffsetY: 20,
								},
								itemStyle: {
									normal: {
										color: colorList[0],
										borderColor: colorList[0],
									},
								},
								markPoint: {
									symbol: 'pin', //标记(气泡)的图形
									symbolSize: 50, //标记(气泡)的大小
									itemStyle: {
										// color: '#4587E7', //图形的颜色。
										borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
										borderWidth: 0, //描边线宽。为 0 时无描边。
										borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
									},
									data: [{
											type: 'max',
											name: '最大值'
										},
										{
											type: 'min',
											name: '最小值'
										},
									],
								},
								markLine: {
									data: [{
										type: 'average',
										name: '平均值'
									}],
								},
							},
							{
								name: cities[1],
								type: 'line',
								data: data2,
								symbolSize: 1,
								symbol: 'circle',
								smooth: true,
								yAxisIndex: 0,
								showSymbol: false,
								emphasis: {
									focus: 'series',
								},
								lineStyle: {
									width: 5,
									color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
											offset: 0,
											color: '#73DD39',
										},
										{
											offset: 1,
											color: '#73DDFF',
										},
									]),
									shadowColor: 'rgba(115,221,255, 0.3)',
									shadowBlur: 10,
									shadowOffsetY: 20,
								},
								itemStyle: {
									normal: {
										color: colorList[1],
										borderColor: colorList[1],
									},
								},
								markPoint: {
									symbol: 'pin', //标记(气泡)的图形
									symbolSize: 50, //标记(气泡)的大小
									itemStyle: {
										color: '#4587E7', //图形的颜色。
										borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
										borderWidth: 0, //描边线宽。为 0 时无描边。
										borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
									},
									data: [{
											type: 'max',
											name: '最大值'
										},
										{
											type: 'min',
											name: '最小值'
										},
									],
								},
								markLine: {
									data: [{
										type: 'average',
										name: '平均值'
									}],
								},
							},
							{
								name: cities[2],
								type: 'line',
								data: data3,
								symbolSize: 1,
								yAxisIndex: 0,
								symbol: 'circle',
								smooth: true,
								showSymbol: false,
								emphasis: {
									focus: 'series',
								},
								lineStyle: {
									width: 5,
									color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
											offset: 0,
											color: '#fe9a',
										},
										{
											offset: 1,
											color: '#fe9a8b',
										},
									]),
									shadowColor: 'rgba(254,154,139, 0.3)',
									shadowBlur: 10,
									shadowOffsetY: 20,
								},
								itemStyle: {
									normal: {
										color: colorList[2],
										borderColor: colorList[2],
									},
								},
								markPoint: {
									symbol: 'pin', //标记(气泡)的图形
									symbolSize: 50, //标记(气泡)的大小
									itemStyle: {
										// color: '#4587E7', //图形的颜色。
										borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
										borderWidth: 0, //描边线宽。为 0 时无描边。
										borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
									},
									data: [{
											type: 'max',
											name: '最大值'
										},
										{
											type: 'min',
											name: '最小值'
										},
									],
								},
								markLine: {
									data: [{
										type: 'average',
										name: '平均值'
									}],
								},
							},
						],
					};
					chart.setOption(option);
					return chart;
				});
			},

			async showCharts2() {
				const dataWI = await this.getWeatherIndex();
				this.$refs.chart2.init(config => {
					const {
						canvas
					} = config;
					const chart = echarts.init(canvas, null, config);

					let option = {
						tooltip: {
							trigger: 'item',
							triggerOn: 'click',
						},
						legend: {
							top: 0
						},
						series: [{
							top: '20%',
							// name: '生活指数',
							type: 'pie',
							radius: [15, config.width / 4],
							center: ['50%', '50%'],
							roseType: 'area',
							itemStyle: {
								borderRadius: 8
							},
							data: dataWI
						}]
					};
					chart.setOption(option);
					return chart;
				});
			},

			async showCharts3() {
				const dataAQI = await this.getNowAirQuality();
				this.$refs.chart3.init(config => {
					const {
						canvas
					} = config;
					const chart = echarts.init(canvas, null, config);

					let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#ffff7f'];
					let arrName = [];
					let arrValue = [];
					let sum = 0;
					let pieSeries = [],
						lineYAxis = [];

					// 数据处理
					dataAQI.forEach((v, i) => {
						arrName.push(v.name);
						arrValue.push(v.value);
						sum = sum + v.value;
					})

					// 图表option整理
					dataAQI.forEach((v, i) => {
						pieSeries.push({
							left: 20,
							top: '-15%',
							// bottom:'5%',
							name: '空气质量',
							type: 'pie',
							clockWise: false,
							hoverAnimation: false,
							radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
							center: ["30%", "50%"],
							label: {
								show: false
							},
							data: [{
								value: v.value,
								name: v.name
							}, {
								value: sum - v.value,
								name: '',
								itemStyle: {
									color: "rgba(0,0,0,0)"
								}
							}]
						});
						pieSeries.push({
							left: 20,
							top: '-15%',
							name: '',
							type: 'pie',
							silent: true,
							z: 1,
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
							center: ["30%", "50%"],
							label: {
								show: false
							},
							data: [{
								value: 7.5,
								itemStyle: {
									color: "#E3F0FF"
								}
							}, {
								value: 2.5,
								name: '',
								itemStyle: {
									color: "rgba(0,0,0,0)"
								}
							}]
						});
						v.percent = (v.value / sum * 100).toFixed(1) + "%";
						lineYAxis.push({
							value: i,
							textStyle: {
								rich: {
									circle: {
										color: color[i],
										padding: [0, 5]
									}
								}
							}
						});
					})

					var option = {
						color: color,
						grid: {
							top: '15%',
							bottom: '54%',
							left: "-15%",
							containLabel: false
						},
						yAxis: [{
							type: 'category',
							inverse: true,
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								formatter: function(params) {
									let item = dataAQI[params];
									return '{line|}{circle|●}{name|' + item.name +
										'}{bd||}{percent|' +
										item.percent + '   }{value|' + item.value + '}{unit|' +
										item.unit + '}'
								},
								interval: 0,
								inside: true,
								textStyle: {
									color: "#333",
									fontSize: 12,

									rich: {
										line: {
											width: 176,
											height: 10,
											// backgroundColor: {image: dashedPic}
											backgroundColor: 'white'
										},
										name: {
											color: '#666',
											fontSize: 12,

										},
										bd: {
											color: '#ccc',
											padding: [0, 5],
											fontSize: 12,

										},
										percent: {
											color: '#333',
											fontSize: 12,

										},
										value: {
											color: '#333',
											fontSize: 12,
											fontWeight: 500,

										},
										unit: {
											fontSize: 12,
											padding: [0, 0, 0, 2]
										}
									},
									padding: [-55, 0, 0, 10]
								},
								show: true
							},
							data: lineYAxis
						}],
						xAxis: [{
							show: false
						}],
						series: pieSeries
					};
					chart.setOption(option);
					return chart;
				});

			},


			async showCharts4() {
				const dataMins = await this.getMinsRian();
				let xData = dataMins.fxTime;
				this.$refs.chart4.init(config => {
					const {
						canvas
					} = config;
					const chart = echarts.init(canvas, null, config);

					var option = {
						backgroundColor: '#ffffff',
						title: {
							// text: '未来两小时降雨量统计',
							x: '4%',
							textStyle: {
								color: '#fff',
								fontSize: '22',
							},
							subtextStyle: {
								color: '#90979c',
								fontSize: '16',
							},
						},
						tooltip: {
							trigger: 'axis',
							triggerOn: 'mousemove|click',
							axisPointer: {
								// show:true,
								axis: 'x',
								snap: true,
								type: 'cross',
								textStyle: {
									color: '#fff',
								},
							},
						},
						grid: {
							borderWidth: 0,
							top: 110,
							bottom: 95,
							textStyle: {
								color: '#fff',
							},
						},
						legend: {
							x: '4%',
							top: '8%',
							textStyle: {
								color: '#90979c',
							},
							data: ['降雨量', '走势'],
						},

						calculable: true,
						xAxis: [{
							type: 'category',
							nameTextStyle: {
								fontSize: 14
							},
							axisLine: {
								lineStyle: {
									color: '#90979c',
								},
							},
							splitLine: {
								show: false,
							},
							axisTick: {
								show: false,
							},
							splitArea: {
								show: false,
							},
							// splitNumber: 5,
							data: xData,
						}, ],
						yAxis: [{
							type: 'value',
							splitLine: {
								show: false,
							},
							axisLine: {
								lineStyle: {
									color: '#90979c',
								},
							},
							axisTick: {
								show: false,
							},
							axisLabel: {
								interval: 'auto',
							},
							splitArea: {
								show: false,
							},
						}, ],
						dataZoom: [{
								show: true,
								height: 30,
								xAxisIndex: [0],
								bottom: 30,
								start: 0,
								end: 20,
								handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
								handleSize: '110%',
								handleStyle: {
									color: '#d3dee5',
								},
								textStyle: {
									color: '#fff',
								},
								borderColor: '#90979c',
							},
							{
								type: 'inside',
								show: true,
								height: 15,
								start: 1,
								end: 35,
							},
						],
						series: [{
							name: '降雨量',
							type: 'bar',
							stack: '总量',
							barMaxWidth: 35,
							barGap: '10%',
							itemStyle: {
								normal: {
									color: 'rgba(255,144,128,1)',
									label: {
										show: true,
										textStyle: {
											color: '#fff',
										},
										position: 'inside',
										formatter: function(p) {
											return p.value > 0 ? p.value : '';
										},
									},
								},
							},
							data: dataMins.precip,
						}, {
							"name": "走势",
							"type": "line",
							symbolSize: 10,
							symbol: 'circle',
							"itemStyle": {
								"normal": {
									"color": "rgba(252,230,48,1)",
									"barBorderRadius": 0,
									"label": {
										"show": true,
										"position": "top",
										formatter: function(p) {
											return p.value > 0 ? (p.value) : '';
										}
									}
								}
							},
							"data": dataMins.precip
						}, ],
					};
					chart.setOption(option);
					return chart;

				});
			},


		}, //methods_end


	}
</script>
<style>
	page {
		height: 100%;
		background-color: #f5f5f5;
		/* overflow-y:scroll; */
	}

	.container {
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}

	.bluebox {
		/* height: 100%; */
		min-height: calc(100% + 1px);
		padding: 30rpx;
		font-size: 28rpx;
		background-color: #7dbbfa;
		position: relative;
	}

	.icon-location {
		width: 30rpx;
		height: 30rpx;
	}

	.icon-arrow {
		width: 28rpx;
		height: 28rpx;
	}

	.w-text {
		width: 180rpx;
		text-align: center;
		text-justify: newspaper;
		word-break: break-all;
	}

	.weather-box {
		width: 690rpx;
		background-color: #7dbbfa;
	}

	.forecast-box {
		min-height: calc(100% + 1px);
		width: 690rpx;
		margin: 0 40rpx 40rpx 30rpx;
		border-radius: 40rpx;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		background-color: #FFFFFF;
		color: #333333;
		font-size: 28rpx;
		position: relative;
	}

	.forecast-box-title {
		width: 630rpx;
		padding: 0 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid #eee;
	}

	.forecast-box-title-min {
		width: 630rpx;
		padding: 0 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: bold;
	}

	.forecast-box-content {
		min-height: 101%;
		width: 690rpx;
	}

	.forecast-box-12hour {
		bottom: '5%';
		width: 100%;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
	}
</style>
