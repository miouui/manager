<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="10">
				<el-card shadow="hover">
					<p class="card-text">实验室2</p>
					<p class="card-text-3">坐标：</p>
					<p class="card-text-3">编码：</p>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="5">
				<el-card shadow="hover" style="background-color:  white;">
					<div style="flex-direction: row;display: flex;">
						<div style="flex-direction: column;display: flex;width: 100px;" >
							<div ><p class="card-text-1">电压</p></div>
							<div ><p class="card-text-2">SN码：</p></div>
						</div>
                        <div style="font-size: 30px;margin-top: 9px;font-weight: bold;color: black;margin-left: 10px;"> 200V<img class="icon" src="../assets/img/警告.png" /></div>
					</div>
					
					
				</el-card>
			</el-col>
			<el-col :span="5">
				<el-card shadow="hover" style="background-color:  #67C23A;">
					<div style="flex-direction: row;display: flex;">
						<div style="flex-direction: column;display: flex;width: 100px;" >
							<div ><p class="card-text-1">电流</p></div>
							<div ><p class="card-text-2">SN码：</p></div>
						</div>
                        <div style="font-size: 30px;margin-top: 9px;font-weight: bold;color: white;margin-left: 10px;"> 200A<img class="icon" src="../assets/img/警告.png" /></div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="5">
				<el-card shadow="hover" style="background-color:  #E6A23C;">
					<div style="flex-direction: row;display: flex;">
						<div style="flex-direction: column;display: flex;width: 100px;" >
							<div ><p class="card-text-1">电能</p></div>
							<div ><p class="card-text-2">SN码：</p></div>
						</div>
                        <div style="font-size: 30px;margin-top: 9px;font-weight: bold;color: white;margin-left: 10px;"> 200J<img class="icon" src="../assets/img/警告.png" /></div>
					</div>
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
					<p class="card-text-1">PH：| 2</p>

				</el-card>
			</el-col>

		</el-row>

	</div>
</template>

<script setup lang="ts" name="dashboard">


const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';


</script>

<style scoped>
.icon {
	width: 20px;
	height: 20px;
}

.card-text-1 {
	font-weight: 900;
	font-size: 24px;
	color: black;
}
.card-text-3 {
	font-weight: bold;
	font-size: 20px;
	margin-top: 10px;
}
.card-text-2 {
	font-weight: bold;

	font-size: 14px;
	color: black;
}
.card-text {
	font-size: 32px;
	font-weight: bold;
}

.el-row {
	margin-bottom: 20px;
}

.el-card {
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
}</style>
