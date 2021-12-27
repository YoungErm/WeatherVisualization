<script>
	export default {
		globalData: {
			key: '83cc87802b794bdbb817f7a75bdfa944',
		},
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			// // 修复小程序主页图片缩放的问题
			// uni.redirectTo({
			// 	url: '/pages/index/index',
			// });
			console.log('App Hide');
			uni.clearStorageSync()
		}
	};
</script>

<style>
	.flex-row {
		display: flex;
		align-items: center;
	}

	.justify-between {
		justify-content: space-between;
	}

	.center {
		justify-content: center;
	}

	.text-center {
		text-align: center;
	}

	.font-thin {
		font-weight: 100;
	}

	.font-24 {
		font-size: 24rpx;
	}

	.font-28 {
		font-size: 28rpx;
	}

	.font-30 {
		font-size: 30rpx;
	}

	.font-32 {
		font-size: 32rpx;
	}

	.font-36 {
		font-size: 36rpx;
	}

	.font-100 {
		font-size: 100rpx;
	}

	.font-333 {
		color: #333333;
	}

	.font-fff {
		color: #FFFFFF;
	}

	.font-666 {
		color: #666;
	}

	.font-999 {
		color: #999;
	}

	.font-333 {
		color: #333333;
	}

	.mg_lt_10 {
		margin-left: 10rpx;
	}

	.mg_lt_20 {
		margin-left: 20rpx;
	}

	.mg_lt_30 {
		margin-left: 30rpx;
	}

	.mg_tp_10 {
		margin-top: 10rpx;
	}

	.mg_tp_20 {
		margin-top: 20rpx;
	}

	.mg_tp_30 {
		margin-top: 30rpx;
	}

	.mg_tp_50 {
		margin-top: 50rpx;
	}

	.mg_30 {
		margin: 30rpx;
	}
</style>
