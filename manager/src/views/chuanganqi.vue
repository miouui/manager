<template>
	<div>
        <el-row :gutter="30">
			<el-col :span="10">
				<el-card shadow="hover" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
				  <p class="name">实验室1-传感器2-温湿度</p>
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
									<div  style="margin-left: 10px;"><a>注意</a></div>
								</div>
						</div>
						<div style="width: 200px;display: flex;"><img class="img-dy" src="../assets//img/正常.png">
							<div  style="margin-left: 10px;"><a>正常</a></div>
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
				<el-card shadow="hover" >
					<schart  class="schart" canvasId="bar" :options="options"></schart>
				</el-card>
			</el-col>
		</el-row>
        <el-row :gutter="30">
			<el-col :span="23">
				<el-card shadow="hover" >
					<schart  class="schart" canvasId="line1" :options="options1"></schart>
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
		text: '温度'
	},
	labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00','9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
	datasets: [
		{
			label: '温度(°c)',
			data: [20, 25, 21, 18, 17, 21, 12, 22,24, 25, 18, 19, 17, 18, 16, 15],
		    smooth: true,
		},


	]
};

const options1 = {
	type: 'line',
	title: {
		text: '湿度'
	},
	labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00','9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
	datasets: [
        {
			label: '湿度(%rh)',
            source:[
				['product','2015','2016']
			],
			data: [18, 22, 18, 20, 19, 21, 16, 21, 28, 23, 19, 11, 25, 19, 18, 16]
		},

	]
};

</script>

<style scoped>
.img-dy{
    height: 20px;
    width: 20px;
}
.Sn{
    margin-top: 10px;
    font-weight: bold;
}
.name{
    font-weight: bold;
    font-size: 24px;
}
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
	margin-bottom: 30px;
}
.el-card{
	border-radius: 15px;
}


.schart {
	width: 100%;
	height: 300px;
	
}

</style>
