// $('#currentDay').text(`
//     ${moment().format('MMMM Do YYYY')}
// `)


// $('#9').val(localStorage.getItem('9'))
// $('#10').val(localStorage.getItem('10'))
// $('#11').val(localStorage.getItem('11'))
// $('#12').val(localStorage.getItem('12'))
// $('#13').val(localStorage.getItem('13'))
// $('#14').val(localStorage.getItem('14'))
// $('#15').val(localStorage.getItem('15'))
// $('#16').val(localStorage.getItem('16'))
// $('#17').val(localStorage.getItem('17'))



// let timeNow = parseInt(moment().format('HH'));

// function checkTime () {
//     for (i-9; i <= 17; i ++) {
//         if (parseInt($(`#${i}`).attr('id')) < timeNow) {
//             $(`#${i}`).removeClass('past present future')
//             $(`#${i}`).addClass('past')
//         } else if (parseInt($(`#${i}`).attr('i')) === timeNow) {
//             $(`#${i}`).removeClass('past present future')
//             $(`#${i}`).addClass('present')
//         } else {
//             $(`#${i}`).removeClass('past present future')
//             $(`#${i}`).addClass('future')
//         }
//     }
// }

// checkTime = {}


// $('.saveBtn').click(function() {
//     // target the text area using sibbling
//         let value  = $(this).siblings(`.description`).val()
//         let time   = $(this).siblings(`.description`).attr('id')
//         localStorage.setItem(time,value)
// }

// )

$(document).ready(function (){

    $(".saveBtn").click(function() {
        let value = $(this).siblings(".description").val()
        console.log(value)
        let time = $(this).parents().attr("id")
        console.log(time)

        localStorage.setItem(time, value)
    })

    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))

    let currentHour = parseInt(moment().format("H"))

    $(".time-block").each(function () {
       let timeBlock = parseInt($(this).attr("id"))
        if(timeBlock === currentHour){
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })
})
