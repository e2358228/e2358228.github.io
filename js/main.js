// 両者の手

let hand_com, hand_man;
let t;
let hand_list = ["グー", "チョキ", "パー"];

 

function janken(t){
    hand_man = hand_list[t];


    // while分でhand_manがhand_lsitリストに一致するまで取得した


    let num = Math.floor(Math.random() * hand_list.length);
    hand_com = hand_list[num];

    if (hand_com === "グー"){
        if (hand_man === "グー"){
            message = "相手はグー!あいこです";
        } else if (hand_man === "チョキ"){
            message = "相手はグー!負けです";
        } else if (hand_man === "パー"){
            message = "相手はグー!勝ちです";
        }

    } else if (hand_com ==="チョキ"){
        if (hand_man === "グー"){
            message = "相手はチョキ!勝ちです";
        } else if (hand_man === "チョキ"){
            message = "相手はチョキ!あいこです";
        } else if (hand_man === "パー"){
            message = "相手はチョキ!負けです";
        }

    } else if (hand_com ==="パー"){
        if (hand_man === "グー"){
            message = "相手はパー!負けです";
        } else if (hand_man === "チョキ"){
            message = "相手はパー!勝ちです";
        } else if (hand_man === "パー"){
            message = "相手はパー!あいこです";
        }

    }





    const p_janken = document.querySelector("#janken");

    console.log(p_janken);

    p_janken.textContent = message;
}



