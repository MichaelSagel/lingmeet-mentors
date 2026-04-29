<template>
  <div class="lmc-design-icon-grub">
    <img
      class="lmc-design-icon-grub__flag"
      src="../../../assets/flag.svg"
    />
    
    <img
      class="lmc-design-icon-grub__ball-flag"
      src="../../../assets/ballFlag.svg"
    />
  </div>
</template>

<style scoped lang="scss">
.lmc-design-icon-grub {}

.lmc-design-icon-grub__flag {
  position: absolute;
  top: 4%;
  left: 52%;
  
  @media (max-width: 721px) {
    display: none;
  }
}

.lmc-design-icon-grub__ball-flag {
  position: absolute;
  top: 51%;
  left: 90%;
  
  @media (max-width: 1279px) {
    top: 60%;
    left: 86%;
  }
  
  @media (max-width: 1084px) {
    top: 50%;
  }
  
  @media (max-width: 830px) {
    left: 84%;
  }
  
  @media (max-width: 721px) {
    display: none;
  }
}
</style>
