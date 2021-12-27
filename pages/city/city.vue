<template>
	<view>
		<view class="flex-row justify-between top">
			<view class="top-search">
				<image src="../../static/images/icon/icon-search.png" mode="" class="icon-search mg_lt_20"></image>
				<input type="text" value="" v-model="location" placeholder="请输入城市/地区" placeholder-style="color:#fff;"
					confirm-type="search" class="mg_lt_20" @confirm="onConfirm" />
			</view>
			<view class="mg_lt_30 font-30" @click="goBack">取消</view>
		</view>

		<view class="title" v-if="!showSearch">热门城市</view>
		<view class="wrap" v-if="!showSearch">
			<view class="hot-city" v-for="item in hotCityArr" @click="chooseLocation(item)">
				{{item.location==item.parent_city?item.parent_city+'，'+item.admin_area:item.location+'，'+item.parent_city+'，'+item.admin_area}}
			</view>
		</view>

		<view class="search-title" v-if="showSearch">'{{search_city}}'相关的全部城市</view>
		<view class='search' v-if="showSearch">
			<view class="search-item" v-for="item in cityArr" @click="chooseLocation(item)">
				{{item.location+'，'+item.parent_city+'，'+item.admin_area+'，'+item.cnty}}
			</view>
			<view class="mg_tp_30 mg_bt_30 font-28 text-center">没有更多了...</view>
		</view>
	</view>
</template>

<script>
	const app = getApp();
	// const db = wx.cloud.database()
	export default {
		data() {
			return {
				search_city : '',
				hotCityArr: [],
				cityArr: [],
				location: '', // 需要查询的城市名称
				showSearch: false,
			}
		},
		onLoad() {
			uni.hideHomeButton();
			this.getHotCity();
		},
		methods: {
			getHotCity() {
				let that = this
				let url = "https://search.heweather.net/top?group=world&key=" + app.globalData.key
				uni.request({
					url: url,
					success(res) {
						that.hotCityArr = res.data.HeWeather6[0].basic
						console.log('hot city:', that.hotCityArr)
					}
				})
			},
			getCity() {
				let that = this
				let url = 'https://search.heweather.net/find?location=' + this.location  + '&key=93af48510a9949629184ec40e74ee75a';// + app.globalData.key
				uni.request({
					url: url,
					success(res) {
						that.cityArr = res.data.HeWeather6[0].basic
						that.showSearch = true
						console.log('search city:', that.cityArr)
					}
				})
			},
			onConfirm(event) {
				this.location = event.target.value
				this.search_city = event.target.value
				console.log('confirm location:', this.location)
				this.getCity()
			},
			chooseLocation(item) {
				let that = this
				let lngLat = item.lon + ',' + item.lat
				uni.setStorageSync('lngLat', lngLat)
				uni.setStorageSync('location', item.location)
				uni.redirectTo({
					url: '../index/index',
				})
			},
			goBack() {
				uni.redirectTo({
					url: '../index/index',
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #7dbbfa;
	}

	.top {
		margin: 30rpx 0;
		padding: 0 30rpx;
		color: #FFFFFF;
	}

	.top-search {
		width: 600rpx;
		height: 64rpx;
		line-height: 64rpx;
		border-radius: 8rpx;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
	}

	.icon-search {
		width: 30rpx;
		height: 30rpx;
	}

	input {
		width: 530rpx;
		height: 64rpx;
		line-height: 64rpx;
	}

	.title {
		color: #fff;
		font-size: 30rpx;
		margin: 30rpx 30rpx 0rpx 30rpx;
	}

	.wrap {
		overflow: hidden;
		white-space: normal;
		width: 690rpx;
		margin: 0 30rpx;
	}

	.hot-city {
		display: inline-block;
		color: #fff;
		height: 60rpx;
		width: 100%;
		line-height: 60rpx;
		padding: 0 10rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
		background-color: rgba(0, 0, 0, 0.2);
	}

	/*.hot-city:nth-child(4n) {
		margin-right: 0;
	}

	.hot-city:nth-child(-n+4) {
		margin-top: 0;
	} */

	.search-title {
		background-color: rgba(0, 0, 0, 0.2);
		padding: 20rpx 30rpx;
		font-size: 28rpx;
		color: #FFFFFF;
	}

	.search {
		margin: 0 30rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		margin-bottom: 30rpx;
	}

	.search-item {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1rpx solid #fff;
	}

	.icon-delete {
		width: 36rpx;
		height: 36rpx;
	}
</style>
