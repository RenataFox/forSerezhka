<template>
  <section class="countdown">
    
    <div v-show="!expired" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.days }}</p>
        <p class="label">Дни</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.hours }}</p>
        <p class="label">Часы</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.minutes }}</p>
        <p class="label">Минуты</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.seconds }}</p>
        <p class="label">Секунды</p>
      </div>
    </div>

    <div v-show="expired" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">Время вышло</p>
        <p class="label"></p>
      </div>
    </div>
  </section>
</template>

<script>
import '../css/timer.less'
export default {
  name: 'Timer',
  props:['deadline'],
  data () {
    return {            
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            expired: false
    }
  },
  computed: {
        theTime() {
            var ctx = this;

            var x = setInterval(function () {

                var countDownDate = new Date(ctx.deadline).getTime(),
                    now = new Date().getTime(),
                    diff = now - countDownDate,

                    tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
                    thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    tseconds = Math.floor((diff % (1000 * 60)) / 1000);

                ctx.days = (tdays < 10) ? '0' + tdays : tdays;
                ctx.hours = (thours < 10) ? '0' + thours : thours;
                ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
                ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

                if (diff < 0) {
                    clearInterval(x);
                    ctx.expired = true;
                    ctx.days = '00';
                    ctx.hours = '00';
                    ctx.minutes = '00';
                    ctx.seconds = '00';
                }
            }, 1000);

            return {
                days: ctx.days,
                hours: ctx.hours,
                minutes: ctx.minutes,
                seconds: ctx.seconds
            };
        }
    }
}
</script>

<style lang="less">
.example {
  color: red;
}
</style>