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
          <div
            class="rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal"
          >
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
          <label
            for="first_name"
            class="block mb-2 text-sm font-semibold text-[#6B6868]"
          >
            Name</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>

        <!-- email -->
        <div class="mb-8">
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phonenumber</label
          >
          <div class="flex">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
            >
              @
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="086-412-2323"
            />
          </div>
        </div>

        <!-- bank -->
        <div class="mb-8">
          <label
            for="countries"
            class="block mb-2 text-sm font-semibold text-[#6B6868]"
            >Select an bank to pay</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full p-2.5"
          >
            <option selected>Choose a bank</option>
            <option v-for="(value, index) in bank" :key="index">
              {{ value }}
            </option>
          </select>
        </div>

        <!-- silp -->
        <div class="mb-8">
          <label
            class="block mb-2 text-sm font-semibold text-[#6B6868]"
            for="file_input"
            >Money transfer slip
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            id="file_input"
            ref="fileInput"
            type="file"
          />
        </div>
      </form>

      <div class="flex justify-end mb-36">
        <button
          class="bg-[#111727] text-white py-4 px-6 rounded-xl"
          @click="payment()"
        >
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
        "K-bank": "K-bank :057-1-67963-9",
        "Promptpay": "Promptpay :086-412-2323",
        "K-bank3": "K-bank3 :1-0112-3123-1235",
      },
    };
  },
  methods: {
    payment() {
      if (
        this.$refs.fileInput.files != null &&
        this.$refs.fileInput.files.length > 0
      ) {
        this.$swal.fire("thank you!", "You clicked the button!", "success");
        this.$router.push("/");
      } else {
        this.$swal.fire("error", "Please fill all info", "error");
      }
    },
  },
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