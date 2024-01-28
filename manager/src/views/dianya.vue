<template>
	<div>
		<el-row :gutter="30">
			<el-col :span="10">
				<el-card shadow="hover" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
					<p class="name">实验室1-传感器1-电参表</p>
					<div style="display: flex;flex-direction: row;">
						<p class="Sn">SN码：</p>
						<a style="margin-top: 11px;">132131232312</a>
					</div>

				</el-card>
			</el-col>
			<el-col :span="7">
				<el-card shadow="hover">
					<div style="flex-direction: row;display: flex;height: 62px;">
						<div style="flex-direction: column;display: flex;">
							<div style="width: 200px;display: flex;flex-direction: row;"> <img class="img-dy"
									src="../assets//img/警告.png">
								<a style="margin-left: 10px;">危险</a>
							</div>
							<div style="margin-top: 12px;width: 200px;display: flex;"> <img class="img-dy"
									src="../assets//img/警告 (1).png">
								<div style="margin-left: 10px;"><a>注意</a></div>
							</div>
						</div>
						<div style="width: 200px;display: flex;"><img class="img-dy" src="../assets//img/正常.png">
							<div style="margin-left: 10px;"><a>正常</a></div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover">
					<el-radio-group v-model="radio">
						<el-radio :label="3">按小时</el-radio>
						<el-radio :label="6" style="margin-left: 30px;">按分钟</el-radio>
						<el-radio :label="9">按每天</el-radio>
						<el-radio :label="12" style="margin-left: 30px;">按每月</el-radio>
					</el-radio-group>
				</el-card>
			</el-col>
		</el-row>


		<el-row :gutter="30">
			<el-col :span="23">
				<el-card shadow="hover">
					<schart class="schart" canvasId="line" :options="options"></schart>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="30">
			<el-col :span="23">
				<el-card shadow="hover">
					<schart class="schart" canvasId="line1" :options="options1"></schart>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="30">
			<el-col :span="23">
				<el-card shadow="hover">
					<schart class="schart" canvasId="line2" :options="options2"></schart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="basedianya">
import Schart from 'vue-schart';
import { ref } from 'vue'

const radio = ref(3)

const options = {
	type: 'line',
	title: {
		text: '电压'
	},
	labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
	datasets: [
		{
			label: '电压(V)',
			data: [234, 278, 270, 190, 230, 110, 210, 170, 234, 278, 270, 190, 230, 110, 210, 170, 180, 210, 205, 150, 250, 180, 203, 190]
		},
	]
};

const options1 = {
	type: 'line',
	title: {
		text: '电压'
	},
	labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
	datasets: [
		{
			label: '电流 (A)',
			fillColor: 'rgba(241, 49, 74, 0.5)',
			data: [120, 252, 352, 251, 132, 232, 210, 170, 234, 278, 270, 190, 240, 110, 210, 170, 180, 210, 205, 150, 250, 180, 203, 190]
		},
	]
};
const options2 = {
	type: 'line',
	title: {
		text: '电能'
	},
	labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
	datasets: [
		{
			label: '电能 (Kw/h)',
			fillColor: 'rgba(255, 127, 80)',
			data: [234, 278, 270, 190, 230, 110, 210, 170, 234, 278, 270, 190, 230, 110, 210, 170, 180, 210, 205, 150, 250, 180, 203, 190]
		},


	]
};
</script>

<style scoped>
.img-dy {
	height: 20px;
	width: 20px;
}

.Sn {
	margin-top: 10px;
	font-weight: bold;
}

.name {
	font-weight: bold;
	font-size: 24px;
}

.card-text-1 {
	font-weight: 900;
	margin-top: 10px;
	font-size: 18px;
}

.card-text {
	font-size: 24px;
	font-weight: bold;
}

.el-row {
	margin-bottom: 30px;
}

.el-card {
	border-radius: 15px;
}


.schart {
	width: 100%;
	height: 300px;

}
</style>
