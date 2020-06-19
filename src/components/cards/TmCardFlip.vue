<template>
  <div class="tm-card-flip">
    <div class="tm-card-flip__flipper">
      <div class="tm-card-flip__front"><slot name="front"></slot></div>
      <div class="tm-card-flip__back"><slot name="back"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-card-flip"
}
</script>

<style>
/* entire container, keeps perspective */
.tm-card-flip {
  perspective: 64rem;
  margin: 1.125rem;
}
/* flip the pane when hovered */
.tm-card-flip:hover .tm-card-flip__flipper,
.tm-card-flip.hover .tm-card-flip__flipper {
  transform: rotateY(180deg);
}

.tm-card-flip,
.tm-card-flip__front,
.tm-card-flip__back {
  width: 18rem;
  height: 24rem;
}

/* flip speed goes here */
.tm-card-flip__flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

/* hide tm-card-flip__back of pane during swap */
.tm-card-flip__front,
.tm-card-flip__back {
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;

  /* card styling */
  overflow: hidden;
  background: var(--app-bg);
  border-radius: 0.5rem;
  box-shadow: hsla(0, 0%, 0%, 0.25) 0 3px 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.tm-card-flip__front:before,
.tm-card-flip__front:after,
.tm-card-flip__back:before,
.tm-card-flip__back:after {
  position: absolute;
  bottom: 0;
  right: 0;
}

/* triangle icon bg */
.tm-card-flip__front:before,
.tm-card-flip__back:before {
  width: 0;
  height: 0;

  display: block;
  border-bottom: 3rem solid var(--link);
  border-left: 3rem solid transparent;
  content: "";
}
.tm-card-flip__back:before {
  border-bottom-color: var(--secondary);
}

/* triangle icon fg */
.tm-card-flip__front:after,
.tm-card-flip__back:after {
  width: 1.75rem;
  height: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  content: "flip";
  color: var(--app-bg);
  font-family: "Material Icons";
}

/* tm-card-flip__front pane, placed above tm-card-flip__back */
.tm-card-flip__front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
}

/* tm-card-flip__back, initially hidden pane */
.tm-card-flip__back {
  transform: rotateY(180deg);
}

/* interior designs */
.tm-card-flip__title {
  font-family: var(--ff-brand);
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 4rem;
  border-bottom: 1px solid var(--bc);
  width: 100%;
}
.tm-card-flip__icon,
.tm-card-flip__statement {
  height: 12rem;
  display: flex;
  align-items: center;
}
.tm-card-flip__statement {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  font-family: var(--ff-brand);
  letter-spacing: -0.03em;
  padding: 0 var(--pad320);
  color: var(--secondary);
}
.tm-card-flip__body {
  font-size: 0.9735rem;
  padding: 0 var(--pad320);
}

/* wrapper for multiple flip cards */
.tm-card-flips {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: var(--pad320);
}

@media screen and (min-width: 768px) {
  .tm-card-flips {
    flex-flow: row wrap;
    margin-right: -1.125rem;
    margin-left: -1.125rem;
    justify-content: space-between;
  }
  .tm-card-flip {
    margin-left: auto;
    margin-right: auto;
  }
  .tm-card-flip,
  .tm-card-flip__front,
  .tm-card-flip__back {
    min-width: 17rem;
    width: 25vw;
  }
}
@media screen and (min-width: 1280px) {
  .tm-card-flips {
    margin: var(--pad768) 0;
  }
  .tm-card-flip,
  .tm-card-flip__front,
  .tm-card-flip__back {
    width: 22.5vw;
  }
}
</style>
