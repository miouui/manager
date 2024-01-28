<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="23">
				<el-card shadow="hover" style="background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);">
					<p class="card-text">实验室1</p>
					<div style="display: flex;">
						<p class="card-text-3" style="min-width: 300px;">坐标：</p>
					<p class="card-text-3">编码：</p>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-divider border-style="dashed" />
		<el-row :gutter="20">
			<el-col :span="4">
				<el-card shadow="hover" style="background-image: linear-gradient(110deg, rgb(192, 199, 216) 0%, #e2ebf1 100%);">
				
						<div>
							<p style="font-weight: bold;font-size: 20px;color: rgb(44, 66, 99);">传感器1-电参表</p>
							<div style="position: relative;top:6px;display: flex;flex-direction: row;"><img src="../assets//img//绿灯.png" style="height: 20px;width: 20px;"><div style="margin-left: 10px;margin-top: 1px;font-size: 12px;font-weight: 900;color:rgb(44, 66, 99)">正常运行</div></div>
							<p style="margin-top: 12px;font-size: 12px;color: rgb(44, 66, 99);">Sn码：2312312312</p>
						</div>
					
				</el-card>
					
			</el-col>
			<el-col :span="6" style="margin-left: 20px;">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">电压：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器1-电压</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/电压.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">V</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">电流：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器1-电流</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/电流.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">A</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">电能：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器1-电能</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/电能.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">Kw/h</div>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-divider border-style="dashed" />
		<el-row :gutter="20">
			<el-col :span="4">
				<el-card shadow="hover" style="background-image: linear-gradient(110deg, rgb(192, 199, 216) 0%, #e2ebf1 100%);">
					<div>
							<p style="font-weight: bold;font-size: 20px;color: rgb(44, 66, 99);">传感器2-温湿度</p>
							<div style="position: relative;top:6px;display: flex;flex-direction: row;"><img src="../assets//img//黄灯.png" style="height: 20px;width: 20px;"><div style="margin-left: 10px;margin-top: 1px;font-size: 12px;font-weight: 900;color: rgb(44, 66, 99);">运行异常</div></div>
							<p style="margin-top: 12px;font-size: 12px;color: rgb(44, 66, 99);">Sn码：2312312312</p>
						</div>
				</el-card>
			</el-col>
			<el-col :span="6" style="margin-left: 20px;">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">温度：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器2-温度</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/wdj.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">20</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">°c</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">湿度：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器2-湿度</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/湿度.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">%rh</div>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-divider border-style="dashed" />
		<el-row :gutter="20">
			<el-col :span="4">
				<el-card shadow="hover" style="background-image: linear-gradient(110deg, rgb(192, 199, 216) 0%, #e2ebf1 100%);">
					<div>
							<p style="font-weight: bold;font-size: 20px;color: rgb(44, 66, 99);">传感器3-水质</p>
							<div style="position: relative;top:6px;display: flex;flex-direction: row;"><img src="../assets//img//红灯.png" style="height: 20px;width: 20px;"><div style="margin-left: 10px;margin-top: 1px;font-size: 12px;font-weight: 900;color: rgb(44, 66, 99);">停止运行</div></div>
							<p style="margin-top: 12px;font-size: 12px;color: rgb(44, 66, 99);">Sn码：2312312312</p>
						</div>
				</el-card>
			</el-col>
			<el-col :span="6" style="margin-left: 20px;">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">电导率：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器3-电导率</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/电导率.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">A</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">PH：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器3-PH</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/PH值.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">2</div>
					
						</div>
					</div>
				</el-card>
			</el-col>
	
		</el-row>
		<el-divider border-style="dashed" />
		<el-row :gutter="20">
			<el-col :span="4">
				<el-card shadow="hover" style="background-image: linear-gradient(110deg, rgb(192, 199, 216) 0%, #e2ebf1 100%);">
					<div>
							<p style="font-weight: bold;font-size: 20px;color: rgb(44, 66, 99);">传感器4-流量</p>
							<div style="position: relative;top:6px;display: flex;flex-direction: row;"><img src="../assets//img//红灯.png" style="height: 20px;width: 20px;"><div style="margin-left: 10px;margin-top: 1px;font-size: 12px;font-weight: 900;color: rgb(44, 66, 99);">停止运行</div></div>
							<p style="margin-top: 12px;font-size: 12px;color: rgb(44, 66, 99);">Sn码：3312312312</p>
						</div>
				</el-card>
			</el-col>
			<el-col :span="6" style="margin-left: 20px;">
				<el-card shadow="hover" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);">
					<div style="display: flex;flex-direction: row;">
						<div style="display: flex;flex-direction: column;min-width: 150px">
						   <div style="font-weight: bold;color: rgb(44, 66, 99);font-size: 25px;margin-top: 8px;">流量：</div>
						   <div style="font-size: 12px;color: rgb(44, 66, 99);margin-top: 15px;">实验室1-传感器4-流量</div>
						</div>
						<div style="display: flex;flex-direction: row;margin-top: 10px;">
							<div><img style="height: 20px;width: 20px;margin-top: 15px;margin-right: 5px;" src="../assets//img/水流量.png"></div>
							<div style="font-weight: bold;font-size: 45px;color: rgb(44, 66, 99);">200</div>
							<div style="margin-top: 20px;color: rgb(44, 66, 99);margin-left: 4px;">m³/s</div>
						</div>
					</div>
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
.el-divider--horizontal{
     border-top: 1px dashed #9e9e9e;
 } 
.icon {
	width: 20px;
	height: 20px;
	margin-left: 20px;
}

.card-text-1 {
	font-weight: 900;
	font-size: 24px;
	color: rgb(44, 66, 99);
}

.card-text-4 {
	font-weight: bold;
	font-size: 24px;
	color: rgb(205, 100, 100);
}

.card-text-5 {
	font-weight: bold;
	font-size: 18px;
	color: rgb(205, 100, 100);
}

.card-text-3 {

	font-size: 20px;
	margin-top: 10px;
}

.card-text-2 {
	font-weight: bold;

	font-size: 14px;
	color: black;
}

.card-text {
	font-size: 36px;
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
