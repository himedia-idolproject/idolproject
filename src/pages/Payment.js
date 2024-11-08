import React from "react";
import style from "./Payment.module.css";
import { Trash2 } from "lucide-react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reduxComponents/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const customSwal = Swal.mixin({
  customClass: {
    popup: "swal-popup",
    container: "swal-container",
  },
  buttonsStyling: true,
  showClass: {
    popup: "animate__animated animate__fadeIn faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOut faster",
  },
});

const style2 = document.createElement("style");
style2.textContent = `
  .swal-container {
    padding: 0 !important;
  }
  .swal-popup {
    padding: 2rem;
    text-align: center;
  }
  .swal2-container {
    padding: 0 !important;
    overflow-y: auto !important;
  }
  .swal2-shown {
    overflow-y: auto !important;
    padding-right: 0 !important;
  }
  body.swal2-shown > :not(.swal2-container) {
    filter: blur(10px);
    pointer-events: none;
  }
  .swal2-html-container {
    font-size: 1em; /* 폰트 크기 조정 */
    color: #FF7171;
  }
`;
document.head.appendChild(style2);

export default function Payment() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total_discount = items.reduce((sum, item) => sum + item.price * item.quantity * item.discount, 0);

  const handlePayment = () => {
    let timerInterval;
    customSwal
      .fire({
        icon: "question",
        title: "영수증을 출력하시겠습니까?",
        html: "자동 종료까지 <b></b> 초 남았습니다.",
        showDenyButton: true,
        confirmButtonText: "출력",
        denyButtonText: "미출력",
        timer: 3000,
        timerProgressBar: true,
        allowOutsideClick: false,
        scrollbarPadding: false,
        width: "400px",
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            const remainingTime = Math.ceil(Swal.getTimerLeft() / 1000);
            b.textContent = remainingTime;
          }, 100);
          document.body.style.overflow = "auto";
          document.body.style.paddingRight = "0px";
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      })
      .then((result) => {
        dispatch(clearCart());
        customSwal
          .fire({
            icon: "success",
            title: "결제가 완료되었습니다.",
            html: "2초 뒤에 홈 화면으로 이동합니다. <b></b> 초 남았습니다.",
            allowOutsideClick: false,
            scrollbarPadding: false,
            width: "400px",
            didOpen: () => {
              const b = Swal.getHtmlContainer().querySelector("b");
              let secondsLeft = 2;
              b.textContent = secondsLeft;
              timerInterval = setInterval(() => {
                secondsLeft -= 1;
                b.textContent = secondsLeft;
                if (secondsLeft <= 0) {
                  clearInterval(timerInterval);
                  Swal.close();
                  navigate("/");
                }
              }, 1000);
            },
          })
          .then((result) => {
            if (result.isConfirmed) {
              clearInterval(timerInterval);
              Swal.close();
              navigate("/");
            }
          });
      });
  };

  const handleDelete = () => {
    let timerInterval;
    customSwal
      .fire({
        icon: "warning",
        title: "정말 삭제하시겠습니까?",
        html: "<span style='font-size:1em; color:#FF7171;'>삭제시 되돌릴 수 없습니다.</span>",
        showCancelButton: true,
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        confirmButtonColor: "#d33",
        allowOutsideClick: false,
        scrollbarPadding: false,
        width: "400px",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart());
          customSwal
            .fire({
              icon: "success",
              title: "삭제가 완료되었습니다.",
              html: "2초 뒤에 홈 화면으로 이동합니다. <b></b> 초 남았습니다.",
              allowOutsideClick: false,
              scrollbarPadding: false,
              width: "400px",
              didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector("b");
                let secondsLeft = 2;
                b.textContent = secondsLeft;
                timerInterval = setInterval(() => {
                  secondsLeft -= 1;
                  b.textContent = secondsLeft;
                  if (secondsLeft <= 0) {
                    clearInterval(timerInterval);
                    Swal.close();
                    navigate("/");
                  }
                }, 1000);
              },
            })
            .then((result) => {
              if (result.isConfirmed) {
                clearInterval(timerInterval);
                Swal.close();
                navigate("/");
              }
            });
        }
      });
  };

  return (
    <div className={style.container}>
      <div className={style.item_box}>
        <Items />
      </div>
      <div className={style.box}>
        <div className={style.first}>
          <h1 className={style.sub}>상품금액</h1>
          <div className={style.price}>
            <div className={style.total}>
              <p>총 상품금액</p>
              <p>{total.toLocaleString()}원</p>
            </div>
            <div className={style.total}>
              <p>총 할인금액</p>
              <p style={{ color: "#FF2626" }}>-{total_discount.toLocaleString()}원</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.total}>
          <h2>결제예상금액</h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{(total - total_discount).toLocaleString()}원</p>
        </div>
        <ul>
          <li>• 교환 및 반품은 수령 후 7일 이내로 접수하셔야합니다.</li>
          <li>• 세트 상품의 경우 부분 교환 및 부분 환불이 불가합니다.</li>
          <li>• 고객님의 단순 변심에 의한 교환/반품일 경우, 환불 불가능합 &nbsp;&nbsp;니다.</li>
          <li>
            • 고객님에 의한 상품,라벨, 택 등이 훼손되었을 경우와 상품의 &nbsp;&nbsp;사용 후에는 교환 및 환불이
            불가능합니다.
          </li>
        </ul>
        <div className={style.btn}>
          <button className={style.pay} onClick={handlePayment}>
            결제
          </button>
          <button className={style.delete} onClick={handleDelete}>
            <Trash2 className={style.trash} />
          </button>
        </div>
      </div>
    </div>
  );
}
