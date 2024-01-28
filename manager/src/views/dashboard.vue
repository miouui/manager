<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="10">
				<el-card shadow="hover">
				  <p class="card-text">实验室1</p>
				  <p class="card-text-1">坐标：</p>
				  <p class="card-text-1">编码：</p>
				</el-card>
			</el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">电压：</p>
	
				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">电流：</p>
	
				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">电能：</p>
				</el-card>
			</el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">流量：</p>
	
				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">流量：</p>
	
				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">温湿度：</p>
				</el-card>
			</el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">电导率：</p>
	
				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
				  <p class="card-text-1">PH：</p>
	   
				</el-card>
			</el-col>
		
			</el-row>

	</div>
</template>

<script setup lang="ts" name="dashboard">


const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';

const options = {
	type: 'bar',
	title: {
		text: '流量'
	},
	xRorate: 25,
	labels: ['周一', '周二', '周三', '周四', '周五'],
	datasets: [
		{
			label: '家电',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 190, 135, 160]
		},
		{
			label: '食品',
			data: [144, 198, 150, 235, 120]
		}
	]
};
const options2 = {
	type: 'line',
	title: {
		text: '电压'
	},
	labels: ['6月', '7月', '8月', '9月', '10月'],
	datasets: [
		{
			label: '家电',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 150, 135, 160]
		},
		{
			label: '食品',
			data: [74, 118, 200, 235, 90]
		}
	]
};
const options3 = {
	type: 'pie',
	title: {
		text: '服装品类销售饼状图'
	},
	legend: {
		position: 'left'
	},
	bgColor: '#fbfbfb',
	labels: ['T恤', '牛仔裤', '连衣裙', '毛衣', '七分裤', '短裙', '羽绒服'],
	datasets: [
		{
			data: [334, 278, 190, 235, 260, 200, 141]
		}
	]
};
const tz = {
   
}
</script>

<style scoped>
.card-text-1{
	font-weight: 900;
	margin-top: 10px;
	font-size: 18px;
}
.card-text{
	font-size: 24px;
	font-weight: bold;
}
.el-row {
	margin-bottom: 20px;
}
.el-card{
	border-radius: 15px;
}
.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-bottom: 20px;
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.schart {
	width: 100%;
	height: 300px;
}
</style>
