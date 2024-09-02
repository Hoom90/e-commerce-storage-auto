<script setup>
import inputComp from "@/assets/component/inputComp.vue"
import zoomIconComp from "@/assets/component/zoom.vue"
import { appStore } from "@/store/app";
import { reactive } from "vue";
const breadCrumb = appStore()
const options = appStore()
const state = reactive({

})
onMounted(() => {
  breadCrumb.setBreadCrumbs([{
    title: 'انبارداری',
    to: '/account/warehouse'
  }, {
    title: 'افزودن جدید',
    to: '/account/warehouse/add'
  }])
  breadCrumb.setPageTitle({
    title: 'افزودن جدید',
    to: '/account/warehouse/add'
  })
  options.setOptions([
    { title: 'قیمت ها', style: 'border border-blue-500 bg-white text-blue-500', method: null },
    { title: 'نقدینگی', style: 'border border-blue-500 bg-white text-blue-500 mt-1', method: null }
  ])
  // getData()
})
</script>
<template>
  <!-- single add -->
  <div class="w-full relative">
    <div class="mx-auto p-[10px]">
      <!-- body -->
      <div class="h-[340px] flex flex-col gap-1">
        <!-- search -->
        <!-- <div class="lg:w-1/3 border rounded">
          
          <div class="h-[90%]">
            <div class="flex gap-1 items-center rounded px-1">
              <input type="search" class="outline-none min-w-[300px] w-full" placeholder="جستجو در بین کالاهای موجود"
                @input="searchWord" />
              <zoomIconComp width="20" color="#aaa" />
            </div>
            
            <div class="flex flex-col h-full w-full">
              <button class="border border-gray-200 hover:bg-[#c9c9c9] max-h-[40px]" v-for="(item, index) in dbData"
                @click="duplicateItemData(index)" :name="'item' + index" id="itemData" v-bind:key="index">
                <div class="flex justify-between gap-1 p-[10px] text-[12px]">
                  <span>{{ item.name }}</span>
                  <span dir="ltr">{{ item.salesPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
                </div>
              </button>
            </div>
          </div>
          <div class="flex justify-center items-center h-full gap-1 rounded-md p-2">
            هیچ کالایی یافت نشد
          </div>
        </div> -->
        <!-- form -->
        <div class="rounded grid gap-1">
          <!-- date -->
          <!-- <div class="flex justify-end">
            <div class="flex flex-col w-[150px]">
              <div class="border rounded px-1 text-center flex items-center" @keyup="setDate">
                <input type="text" class="w-full outline-none text-center"
                  :value="dayjs().calendar('jalali').locale('fa').format('DD')" id="day" placeholder="روز"
                  maxlength="2" />/
                <input type="text" class="w-full outline-none text-center"
                  :value="dayjs().calendar('jalali').locale('fa').format('MM')" id="month" placeholder="ماه"
                  maxlength="2" />/
                <input type="text" class="w-full outline-none text-center"
                  :value="dayjs().calendar('jalali').locale('fa').format('YYYY')" id="year" placeholder="سال"
                  maxlength="4" />
              </div>
            </div>
          </div> -->
          <!-- Name SellerName -->
          <inputComp v-model="state.title" class="mb-3" type="text" placeholder="نام کالا*" :required="true" />
          <inputComp v-model="state.seller" class="mb-3" type="text" placeholder="نام فروشنده" :required="true" />
          <!-- Compnay PurchasePrice -->
          <inputComp v-model="state.companyTitle" class="mb-3" type="text" placeholder="نام شرکت کالا" />
          <inputComp v-model="state.buyPrice" class="mb-3" type="number" placeholder="قیمت خرید فی کالا (ریال)*"
            :required="true" />
          <!-- SalesPrice Profit -->
          <inputComp v-model="state.sellPrice" class="mb-3" type="number" placeholder="قیمت فروش فی کالا (ریال)*"
            :required="true" />
          <inputComp v-model="state.profit" class="mb-3" type="number" placeholder="سود فی کالا (ریال)"
            :disabled="true" />
          <!-- Amount Unit FinalProfit -->
          <!-- <div class="md:grid grid-flow-col grid-cols-2 gap-1">
            <div class="flex flex-col col-span-1" @keyup="calculateFinalProfit"> -->
          <inputComp v-model="state.amount" class="mb-3" type="number" placeholder="مقدار*" :required="true" />
          <!-- <p>مقدار<span class="text-red-500">(اجباری)</span></p>
              <div class="flex justify-between border rounded">
                <input type="text" class="outline-none px-1 w-full border-l bg-transparent" dir="ltr" placeholder="0"
                  @input="setAmount(), calculateFullDebtPaidTypeDate(), calculateAmountUnit(), setFinalProfit()" />
                <select class="cursor-pointer outline-none bg-transparent" @input="setUnit">
                  <option value="عدد">عدد</option>
                  <option value="کیلوگرم">کیلوگرم</option>
                  <option value="گرم">گرم</option>
                </select>
              </div>
            </div> -->
          <inputComp v-model="state.finalProfit" class="mb-3" type="number" placeholder="سود محموله (ریال)"
            :required="true" />
          <!-- <div class="flex flex-col col-span-1">
              <span>سود x مقدار</span>
              <div class="border p-[5px] bg-gray-300 rounded-md px-1 text-center" id="FinalProfit">سود محموله (ریال)</div>
            </div> -->
          <!-- </div> -->
        </div>
      </div>
      <!-- footer -->
      <!-- <div class="w-full flex flex-col lg:flex-row gap-1 lg:gap-0 items-center mt-[10px] text-center">
        <div class="grid grid-flow-col grid-cols-3 items-center gap-1 w-full lg:mb-1">
          <span>هزینه کل کالا:</span>
          <span id="FullDebt" class="text-white bg-red-500 p-[5px]">0</span>
          <span>ریال</span>
        </div>
        <div class="grid grid-flow-col grid-cols-3 lg:flex items-center gap-1 w-full">
          <span>پرداخت:</span>
          <div class="flex flex-col lg:flex-row border border-blue-500 w-full">
            <input type="text" value="0" id="Paid" class="outline-none border-blue-500 border-b lg:border-l lg:border-b-0"
              dir="ltr" @input="setPaid">
            <select id="Type" class="outline-none" @input="setType">
              <option value="چک">چک</option>
              <option value="نقدی">نقدی</option>
              <option value="کارتخوان">کارتخوان</option>
              <option value="کارت به کارت">کارت به کارت</option>
            </select>
          </div>
          <span>ریال</span>
        </div>
        <div class="grid grid-flow-col grid-cols-3 lg:grid-cols-2 items-center gap-1 w-full">
          <span>توضیحات:</span>
          <input type="text" id="Description" class="text-center border border-blue-500" @input="setDescription">
        </div>
        <div class="w-full flex lg:justify-end">
          <button @click="postData"
            class="border bg-blue-500 hover:bg-blue-600 text-white p-[5px] w-full lg:w-2/3 rounded">
            ذخیره
          </button>
        </div>
      </div> -->
    </div>
  </div>
  <Loading v-if="loading"></Loading>
</template>