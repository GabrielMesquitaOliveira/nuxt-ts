<template>
   <div class="welcome-area">
      <LoginForm id="welcome-loginform"/>
      <BigTitle id="welcome-bigtitle"/>
   </div>
</template>
<style scoped>
div.welcome-area {
   height: 100%;
   display: grid;
   grid-template-columns: 50vw 50vw;
   justify-content: center;
   align-items: center;
   flex-direction: row;
}
div.welcome-area > #welcome-loginform {
   justify-self: flex-end;
   width: 30rem;
   height: 30rem;
   background-color: #FFFFFF;
}
div.welcome-area > #welcome-bigtitle {
   width: 40rem;
   height: 40rem;
   align-self: self-start;
   justify-self: flex-end;
}
</style>