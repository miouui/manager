<template>
	<div>
        <el-row :gutter="30">
			<el-col :span="10">
				<el-card shadow="hover" style="background-color: rgba(230, 162, 60, 0.5);">
				  <p class="name">实验室2电流</p>
                  <div style="display: flex;flex-direction: row;">
                    <p class="Sn">SN码：</p>
                    <a style="margin-top: 11px;">132131232312</a>
                  </div>
                  
				</el-card>
			</el-col>
            <el-col :span="6">
				<el-card shadow="hover" >
                    <div style="flex-direction: row;display: flex;">
                    <div style="flex-direction: column;display: flex;">
                        <div style="width: 200px;">  <img class="img-dy" src="../assets//img/警告.png"></div>
                        <div style="margin-top: 12px;width: 200px;">  <img class="img-dy" src="../assets//img/警告 (1).png"></div>
                    </div>
                    <div style="width: 200px;"><img class="img-dy" src="../assets//img/正常.png"></div>
                </div>
				</el-card>
			</el-col>
		
		</el-row>

        
		<el-row :gutter="30">
			<el-col :span="23">
				<el-card shadow="hover" >
					<schart ref="bar" class="schart" canvasId="line" :options="options"></schart>
				</el-card>
			</el-col>
		
		
		</el-row>

	</div>
</template>

<script setup lang="ts" name="basedianya">
import Schart from 'vue-schart';

const options = {
	type: 'line',
	title: {
		text: '电流'
	},
	labels: ['6月', '7月', '8月', '9月', '10月'],
	datasets: [
		{
			label: '电流',
			data: [234, 278, 270, 190, 230]
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
