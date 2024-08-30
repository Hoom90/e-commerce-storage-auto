<script setup>
import leftIconComp from "@/assets/component/left.vue"
import shopping_cartIconComp from "@/assets/component/shopping_cart.vue"
// import addTransitionComp from "./cashierView/addTransactionComp.vue"
// import closeBalanceComp from "./cashierView/closeBalanceComp.vue"
import { appStore } from "@/store/app";
// import axiosApi from "@/composables/axios-api"
// const instance = getCurrentInstance()
// const axiosApi = instance.appContext.config.globalProperties.$axiosApi
// const dayjs = instance.appContext.config.globalProperties.$dayjs
const breadCrumb = appStore()
const options = appStore()
const state = reactive({
    income: {
        receiverNameIn: null,
        paidIn: null,
        descriptionIn: null,
        typeIn: null,
    },
    outcome: {
        receiverNameOut: null,
        paidOut: null,
        descriptionOut: null,
        typeOut: null,
    },
    modal: false,
    closeBalance: false,
    dbData: [],
    historyData: [],
})

const tableHeader = ['مبلغ (ریال)', 'نوع پرداخت']
const balanceData = ref({ income: '', debt: '', current: '' })
const loading = ref(false)
const message = ref(null)

onMounted(() => {
    breadCrumb.setBreadCrumbs([])
    breadCrumb.setPageTitle({
        title: 'صندوق',
        to: '/account/cashier'
    })
    options.setOptions([
        { title: 'بستن دخل', style: 'bg-blue-500 text-white', method: testOptions },
        { title: 'وضعیت دخل', style: 'bg-white border border-blue-500 rounded mt-1', method: testOptions2 }
    ])
    state.income.typeIn = 'کارتخوان1'
    state.outcome.typeOut = 'کارت به کارت'
    getData()
})

const testOptions = () => {
    console.log('sakjdasd');
}

const testOptions2 = () => {
    console.log('21231231');
}

const getData = async () => {
    state.historyData = [
        { amount: 5000, source: 'کارت', type: 1 },
        { amount: 15000, source: 'نقد', type: 2 },
        { amount: 25000, source: 'نقد', type: 1 },
        { amount: 58000, source: 'کارت', type: 1 },
        { amount: 100000, source: 'کارت به کارت', type: 1 },
        { amount: 1000000, source: 'کارت به کارت', type: 1 },
        { amount: 45000, source: 'نقد', type: 1 },
        { amount: 10000, source: 'نقد', type: 1 },
    ]
    // balanceData.value = { income: '', debt: '', current: '' }
    // state.historyData = []
    // loading.value = true
    // await getBalance()
    // await getBalanceLogs()
    // calculateTodayBalance()
    // formatHistoryData()
    // loading.value = false
}

// Get Today Transactions
const getBalance = async () => {
    // state.dbData = await axiosApi.get(`/balanceTransaction/${dayjs().calendar('jalali').locale('fa').format('YYYY-MM-DD')}`)
    //     .then((res) => res.data ?? [])
    //     .catch(function (error) { console.log(error), loading.value = false, message.value = error })
}

// Get All Histories
const getBalanceLogs = async () => {
    // state.historyData = await axiosApi.get(`/balanceHistories/${dayjs().calendar('jalali').locale('fa').format('YYYY-MM-DD')}`)
    // .then((res) => res.data ?? [])
    // .catch((error) => { 
    //     console.log(error)
    //     loading.value = false
    //     message.value = error
    // })
}

//POST
const postExpense = async () => {
    if (newTransaction.outcome.receiverNameOut == null) {
        message.value = "مالک حساب نباید خالی باشد"
        return
    }
    if (newTransaction.outcome.paidOut == null) {
        message.value = "مبلغ نباید خالی باشد"
        return
    }
    if (newTransaction.outcome.descriptionOut == null) {
        message.value = "توضیحات نباید خالی باشد"
        return
    }
    // const body = {
    //     receiverName: newTransaction.outcome.receiverNameOut,
    //     paid: newTransaction.outcome.paidOut,
    //     description: newTransaction.outcome.descriptionOut,
    //     type: newTransaction.outcome.typeOut,
    //     date: dayjs().calendar('jalali').locale('fa').format('YYYY-MM-DD'),
    // };
    loading.value = true;
    // await axiosApi.post("/balanceTransaction/expense", body, {
    //     headers: {
    //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //     }
    // })
    //     .then(
    //         newTransaction.outcome.receiverNameOut = null,
    //         newTransaction.outcome.paidOut = null,
    //         newTransaction.outcome.descriptionOut = null,
    //         getData()
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //         message.value = error
    //     })
    //     .finally(
    //         loading.value = false
    //     )
}

// POST
const postEarning = async () => {
    if (newTransaction.income.receiverNameIn == null) {
        message.value = "مالک حساب را وارد کنید"
        return
    }
    if (newTransaction.income.paidIn == null) {
        message.value = "مبلغ را وارد کنید"
        return
    }
    if (newTransaction.income.descriptionIn == null) {
        newTransaction.income.descriptionIn = "ورودی خارج از سیستم"
    }
    // const body = {
    //     receiverName: newTransaction.income.receiverNameIn,
    //     paid: newTransaction.income.paidIn,
    //     description: newTransaction.income.descriptionIn,
    //     type: newTransaction.income.typeIn,
    //     date: dayjs().calendar('jalali').locale('fa').format('YYYY-MM-DD'),
    // };
    // console.log(body);
    loading.value = true;
    // await axiosApi.post("/balanceTransaction/earning", body, {
    //     headers: {
    //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //     }
    // })
    //     .then(
    //         newTransaction.income.paidIn = null,
    //         newTransaction.income.receiverNameIn = null,
    //         newTransaction.income.descriptionIn = null,
    //         getData()
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //         message.value = error
    //     })
    //     .finally(
    //         loading.value = false
    //     )
}

// DELETE
const deleteData = async (index) => {
    let id = historyData.value[index]._id
    let fk = historyData.value[index].fk
    const body = {
        id,
        fk,
    };
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    };
    loading.value = true
    await axios.delete(import.meta.env.VITE_BASE_URL + "/balanceTransaction/" + id, { headers, data: body })
        .then(
            document.querySelector('div[name=data' + index + ']').classList.replace('grid', 'hidden'),
            getData()
        )
        .catch((error) => {
            console.log(error);
            loading.value = false
            message.value = error
        }).finally(
            loading.value = false,
        )
}


const calculateTodayBalance = () => {
    let current = 0, income = 0, debt = 0;
    state.dbData.forEach(item => {
        if (parseInt(item.action) > 0) {
            income += parseInt(item.action)
        }
        if (parseInt(item.action) < 0) {
            debt += parseInt(item.action)
        }
        current += parseInt(item.action)
    });
    income = income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    debt = (debt * -1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    current = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    balanceData.value = {
        income,
        debt,
        current,
    }
}

const formatHistoryData = () => {
    let temp = []
    state.historyData.forEach(item => {
        item.amount = item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        temp.push(item)
    })
    state.historyData = temp
}

const IsDeleteActive = (index) => {
    // if(historyData.value[index].description == '') return false
    // else return true
}

</script>
<template>
    <select class="w-full border rounded p-3 mb-3">
        <option value="null" selected>نمایش بر اساس</option>
    </select>

    <div class="w-full lg:order-1">
        <div v-for="(item, index) in state.historyData" class="flex border bg-white rounded-full mb-3 text-center shadow"
            :class="item.type == 2 ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'" :key="index">
            <div class="py-2 px-3 w-full"> {{ item.source }}</div>
            <div class="py-2 px-3 w-full" dir="ltr">{{ item.amount.toLocaleString() }}</div>
            <div class="flex items-center justify-center px-3">
                <leftIconComp width="20" color="#000" />
            </div>
        </div>
    </div>

    <button
        class="fixed bottom-24 right-5 bg-blue-500 w-14 aspect-square rounded-full flex justify-center items-center shadow-xl"
        @click="state.modal = !state.modal">
        <shopping_cartIconComp width="40" color="#ffffff" />
    </button>

    <Loading v-if="loading"></Loading>
</template>