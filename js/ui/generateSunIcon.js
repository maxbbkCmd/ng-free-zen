export const generateSunIcon = () => {
  return `
    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9856 3.00258C14.9612 3.00704 14.9367 3.01373 14.9145 3.02041C14.6499 3.08061 14.4631 3.31917 14.4698 3.59117V7.01571C14.4676 7.22083 14.5743 7.41257 14.7522 7.51735C14.93 7.61991 15.1479 7.61991 15.3258 7.51735C15.5037 7.41257 15.6104 7.22083 15.6082 7.01571V3.59117C15.6149 3.42619 15.5482 3.26789 15.4303 3.15641C15.3102 3.04271 15.1479 2.98697 14.9856 3.00258ZM6.8745 6.35577C6.66105 6.39368 6.48985 6.54974 6.42981 6.75709C6.36978 6.96666 6.43204 7.18961 6.5899 7.33676L9.00901 9.76248C9.14686 9.93192 9.36698 10.01 9.58043 9.96091C9.79166 9.91186 9.95842 9.74464 10.0073 9.53284C10.0563 9.3188 9.97843 9.09808 9.80945 8.95985L7.39034 6.53414C7.2725 6.40705 7.10129 6.3424 6.92787 6.35577C6.91008 6.35577 6.89229 6.35577 6.8745 6.35577ZM23.0256 6.35577C22.8966 6.37361 22.7766 6.43827 22.6876 6.53414L20.2685 8.95985C20.0995 9.09808 20.0217 9.3188 20.0706 9.53284C20.1196 9.74464 20.2863 9.91186 20.4975 9.96091C20.711 10.01 20.9311 9.93192 21.069 9.76248L23.4881 7.33676C23.6659 7.16732 23.7171 6.90201 23.6126 6.67905C23.5059 6.45387 23.2702 6.32456 23.0256 6.35577ZM14.9856 9.29874C14.9678 9.3032 14.9501 9.30989 14.9323 9.31657C14.8967 9.3188 14.8611 9.32549 14.8255 9.33441C14.8189 9.3411 14.8144 9.34556 14.8077 9.35225C11.7883 9.48156 9.34697 11.9474 9.34697 15.0063C9.34697 18.1477 11.9062 20.7139 15.039 20.7139C18.1718 20.7139 20.731 18.1477 20.731 15.0063C20.731 11.9586 18.3097 9.50163 15.3058 9.35225C15.2858 9.35225 15.2724 9.33441 15.2524 9.33441C15.1946 9.31212 15.1346 9.30097 15.0746 9.29874C15.0634 9.29874 15.0501 9.29874 15.039 9.29874C15.0212 9.29874 15.0034 9.29874 14.9856 9.29874ZM15.0034 10.4403C15.0145 10.4403 15.0279 10.4403 15.039 10.4403C15.0568 10.4403 15.0746 10.4403 15.0924 10.4403C17.5826 10.4692 19.5926 12.5026 19.5926 15.0063C19.5926 17.5301 17.5559 19.5724 15.039 19.5724C12.5243 19.5724 10.4854 17.5301 10.4854 15.0063C10.4854 12.4959 12.5043 10.4603 15.0034 10.4403ZM3.49487 14.4355C3.18136 14.4801 2.96124 14.7722 3.00571 15.0866C3.05018 15.4009 3.34145 15.6217 3.65496 15.5771H7.07017C7.27472 15.5793 7.46594 15.4723 7.57044 15.2939C7.67272 15.1156 7.67272 14.8971 7.57044 14.7187C7.46594 14.5403 7.27472 14.4333 7.07017 14.4355H3.65496C3.63717 14.4355 3.61938 14.4355 3.60159 14.4355C3.58381 14.4355 3.56602 14.4355 3.54823 14.4355C3.53044 14.4355 3.51266 14.4355 3.49487 14.4355ZM22.8477 14.4355C22.5342 14.4801 22.3141 14.7722 22.3586 15.0866C22.403 15.4009 22.6943 15.6217 23.0078 15.5771H26.423C26.6276 15.5793 26.8188 15.4723 26.9233 15.2939C27.0256 15.1156 27.0256 14.8971 26.9233 14.7187C26.8188 14.5403 26.6276 14.4333 26.423 14.4355H23.0078C22.99 14.4355 22.9722 14.4355 22.9544 14.4355C22.9367 14.4355 22.9189 14.4355 22.9011 14.4355C22.8833 14.4355 22.8655 14.4355 22.8477 14.4355ZM9.34697 20.0718C9.21801 20.0896 9.09795 20.1543 9.00901 20.2501L6.5899 22.6758C6.42092 22.8141 6.3431 23.0348 6.39202 23.2488C6.44093 23.4606 6.60769 23.6279 6.81892 23.6769C7.03237 23.726 7.25249 23.6479 7.39034 23.4785L9.80945 21.0528C9.97843 20.89 10.0296 20.6381 9.93841 20.4218C9.84947 20.2055 9.6338 20.0673 9.40033 20.0718C9.38255 20.0718 9.36476 20.0718 9.34697 20.0718ZM20.5531 20.0718C20.3397 20.1097 20.1685 20.2657 20.1084 20.4731C20.0484 20.6827 20.1107 20.9056 20.2685 21.0528L22.6876 23.4785C22.8255 23.6479 23.0456 23.726 23.2591 23.6769C23.4703 23.6279 23.637 23.4606 23.686 23.2488C23.7349 23.0348 23.6571 22.8141 23.4881 22.6758L21.069 20.2501C20.9622 20.1364 20.8155 20.074 20.6599 20.0718C20.6421 20.0718 20.6243 20.0718 20.6065 20.0718C20.5887 20.0718 20.5709 20.0718 20.5531 20.0718ZM14.9856 22.4083C14.9612 22.4128 14.9367 22.4195 14.9145 22.4261C14.6499 22.4863 14.4631 22.7249 14.4698 22.9969V26.4214C14.4676 26.6266 14.5743 26.8183 14.7522 26.9231C14.93 27.0256 15.1479 27.0256 15.3258 26.9231C15.5037 26.8183 15.6104 26.6266 15.6082 26.4214V22.9969C15.6149 22.8319 15.5482 22.6736 15.4303 22.5621C15.3102 22.4484 15.1479 22.3927 14.9856 22.4083Z" fill="currentColor"/>
    </svg>
  `;
};
