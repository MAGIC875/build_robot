<template>
    <div>
      <button @click="addToCart()" class="add-to-cart">add to cart</button>
        <div class="top-row">
            <div class="top part">

                <div class="robot-name">{{ selectedRobot.head.title }}
                <span v-if="selectedRobot.head.onSale" class="sale">SALE!!!</span>
                </div>

                <img @click="showPartInfo()" :src="selectedRobot.head.src" title="">
                <button @click="selectPrevHead()" class="prev-selector">&#9668;</button>
                <button @click="selectNextHead()" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <img :src="selectedRobot.leftArm.src"  title="">
                <button @click="selectPrevLeftArm()" class="prev-selector">&#9650;</button>
                <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <img :src="selectedRobot.torso.src"  title="">
                <button @click="selectPrevTorsos()"  class="prev-selector">&#9668;</button>
                <button @click="selectNextTorsos()"  class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <img :src="selectedRobot.rightArm.src" title="">
                <button @click="selectPrevRightArm()"  class="prev-selector">&#9650;</button>
                <button @click="selectNextRightArm()"  class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <img :src="selectedRobot.base.src" title="">
                <button @click="selectPrevBase()"  class="prev-selector">&#9668;</button>
                <button @click="selectNextBase()" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  ROBOT
                </th>
                <th>
                  COST
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="robot in cart ">
                <td>{{ robot.head.title }}</td>
                <td class="cost">{{ robot.cost }}</td>
              </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>

import availableParts from '../data/parts'

function getPrevValidIndex(index, length){
    const decIndex = index -1 
    return decIndex < 0 ? length -1 : decIndex

}

function getNextValidIndex  (index, length){
    const incIndex = index +1 
    return incIndex > length -1 ? 0 : incIndex
    
}

export default{
    name:'RobotBuilder',
    data(){
        return{
            availableParts,
            cart: [],
            selectHeadIndex: 1,
            selectBaseIndex:0,
            selectLeftArmIndex:1,
            selectRightArmIndex:3,
            selectTorsosIndex:1,
        }
    },
    computed:{
      selectedRobot(){
        return{
          head: availableParts.heads[this.selectHeadIndex],
          leftArm:availableParts.arms[this.selectLeftArmIndex],
          torso:availableParts.torsos[this.selectTorsosIndex] ,
          rightArm:availableParts.arms[this.selectRightArmIndex],
          base:availableParts.bases[this.selectBaseIndex],
        }
      }
    },
    methods:{
        showPartInfo(){
          this.$router.push({
            name:'ОПИСАНИЕ',
            params:{
              id: selectedParts,
              partType: selectedParts.type
            }
        })
        },
        addToCart(){
          const robot =  this.selectedRobot
          const cost = robot.head.cost + 
                       robot.leftArm.cost +
                       robot.torso.cost +
                       robot.rightArm.cost +
                       robot.base.cost

          this.cart.push(Object.assign(robot, { cost }))
        },
        selectNextHead(){

            this.selectHeadIndex = getNextValidIndex(this.selectHeadIndex, 
                availableParts.heads.length)
        },
        selectPrevHead(){
            this.selectHeadIndex = getPrevValidIndex(this.selectHeadIndex,
              availableParts.heads.length)
        },

        selectPrevLeftArm(){
          this.selectLeftArmIndex = getPrevValidIndex(this.selectLeftArmIndex,
          availableParts.arms.length)
        },
        selectNextLeftArm(){
          this.selectLeftArmIndex = getNextValidIndex(this.selectLeftArmIndex,
          availableParts.arms.length)
        },

        selectPrevTorsos(){
          this.selectTorsosIndex = getPrevValidIndex(this.selectTorsosIndex,
          availableParts.torsos.length)
        },
        selectNextTorsos(){
          this.selectTorsosIndex = getNextValidIndex(this.selectTorsosIndex,
          availableParts.torsos.length)
        },

        selectPrevRightArm(){
          this.selectRightArmIndex = getPrevValidIndex(this.selectRightArmIndex,
          availableParts.arms.length)
        },
        selectNextRightArm(){
          this.selectRightArmIndex = getNextValidIndex(this.selectRightArmIndex,
          availableParts.arms.length)
        },

        selectPrevBase(){
          this.selectBaseIndex = getPrevValidIndex(this.selectBaseIndex,
          availableParts.bases.length)
        },
        selectNextBase(){
          this.selectBaseIndex = getNextValidIndex(this.selectBaseIndex,
          availableParts.bases.length)
        },
    }
}
</script>

<style scoped>
    .part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaaaaa48;
}
.part {
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  background-color: #8d8d8d7e;
  backdrop-filter: blur(20px);
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  background-color: #8d8d8d7e;
  backdrop-filter: blur(20px);
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px; 
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale{
  color:red;
}
th{
  color:  hsla(160, 100%, 37%, 1);;
}
td, th{
  text-align: left;
  padding: 5px;
  padding-right: 20px;

}
.coast{
  text-align: right;
}
.add-to-cart{
  background-color: #8d8d8d7e;
  color: #bebebe;
  border:solid black 2px;
  backdrop-filter: blur(20px);
}
.add-to-cart:hover{
  background-color: #8d8d8db9;
}
.add-to-cart:active{
  scale: 0.9;
}
</style>