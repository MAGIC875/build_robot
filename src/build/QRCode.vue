<template>
    <div class="Qr">
        <div class="top_div">
        <h2>QR code to GitHub</h2>
        <canvas ref="canvas"></canvas>
    </div>

        <div class="bottom_div">
        <p>Scan QR for open site</p>
        <button class="visit-btn" @click="visitSite" >open GitHub</button>
    </div>
    </div>
</template>

<script>
    import QRCode from 'qrcode'

    export default{
        name:'QR CODE',
        data(){
            return{
                url:'https://github.com/MAGIC875/build_robot'
            }
        },
        mounted(){
            const canvas = this.$refs.canvas
            if(canvas){
                QRCode.toCanvas(canvas, this.url, {width: 200},(error)=>{
                    if(error){
                        console.error(error)
                    }
                })
            }
        },
        methods:{
            visitSite(){
                window.open(this.url, '_blank')
            }
        }
    }

</script>



<style>
.top_div>h2{
    padding-bottom: 10px;
}
.bottom_div{
    padding-top: 50px;
}
.bottom_div>p{
    padding-bottom: 8px;
}
button{
    height: 30px;
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: 2px solid rgb(92, 92, 92);
}
button:active{
    scale: 0.95;
}
</style>