<template>
  <div>
    <div class="">
      <!-- paymentid -->
      <p class="font-bold text-md xl:text-xl lg:text-xl md:text-lg p-3">
        Payment - {{ paymentid }}
      </p>
      <!-- card -->
      <div class="card purple my-8 sm:my-2 w-full">
        <div class="max-w-sm w-full lg:max-w-full">
          <div class="rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
            <div>
              <p class="text-white text-xl font-bold leading-none mb-16">
                wiwat liangkobkit
              </p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-100 text-lg mb-2">
                  Hospitalid: {{ dataofbirth }}
                </p>
                <p class="text-gray-100">tel: {{ tel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="">
        <!-- name -->

        <div class="mb-8">
          <label for="first_name" class="block mb-2 text-sm font-semibold text-[#6B6868]">
            Name</label>
          <input type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full p-2.5"
            placeholder="John" required />
        </div>

        <!-- email -->
        <div>
          <label for="input-group-1" class="block mb-2 text-sm font-semibold text-[#6B6868]">E-mail</label>
          <div class="relative mb-8">
            <div class="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input type="text" id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full pl-10 p-2.5"
              placeholder="name@gmail.com" />
          </div>
        </div>

        <!-- bank -->
        <div class="mb-8">
          <label for="countries" class="block mb-2 text-sm font-semibold text-[#6B6868]">Select an option</label>
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full p-2.5">
            <option selected>Choose a bank</option>
            <option v-for="(value, index) in bank" :key="index">
              {{ value }}
            </option>
          </select>
        </div>

        <!-- silp -->
        <div class="mb-8">
          <label class="block mb-2 text-sm font-semibold text-[#6B6868]" for="file_input">Money transfer slip
          </label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            id="file_input" ref="fileInput" type="file" />
        </div>
      </form>

      <div class="flex justify-end mb-36">

        <button class="bg-[#111727]  text-white py-4 px-6 rounded-xl" @click='payment()'>
          Confirm
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentid: "#3132313(paymentid)",
      dataofbirth: "18/01/46",
      tel: "086-412-2323",
      bank: {
        "K-bank1": "K-bank1 :1-0112-3123-1235",
        "K-bank2": "K-bank2 :1-0112-3123-1235",
        "K-bank3": "K-bank3 :1-0112-3123-1235",
      },
    };
  },
  methods: {
    payment() {
      if (this.$refs.fileInput.files != null && this.$refs.fileInput.files.length > 0){
      this.$swal.fire(
        'thank you!',
        'You clicked the button!',
        'success'
      )
      this.$router.push("/");
      }
      else{
        this.$swal.fire(
        'error',
        'Please fill all info',
        'error'
      )
      }
      
  

    }
  }
};
</script>

<style  scoped >
.card {
  box-sizing: border-box;
  padding: 2em;
  border-radius: 25px;
  color: white;
  line-height: 25px;
  box-shadow: 5px 5px 10px #ccc;
  float: left;
}

.card.purple {
  background: linear-gradient(150deg, #111727, #ff5757 150%);
}
</style>