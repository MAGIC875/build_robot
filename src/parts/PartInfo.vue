<template>
    <div class="info">
        <div class="content">
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
        </div>
    </div>
</template>

<script>
import parts from '@/data/parts';

export default{
    name: 'PartInfo',
    computed:{
        part(){
            const{partInfo, id} = this.$route.params
            return parts [partType].find(part => part.id === id)
        }
    }
}
</script>
<style>
 .info{
    height: 500px;
    background-color: #4e4e4e;
    color: white;
 }
 .content{
    margin: 20px;
 }
</style>