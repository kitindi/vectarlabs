import React from "react";

const Proof = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto py-10 sm:px-26 px-4">
        <h2 className="text-2xl sm:text-4xl text-center font-semibold text-slate-200 ">
          Our amazing clients
        </h2>
        <ul className="py-6 my-5 flex gap-8 items-center justify-center flex-wrap">
          <li>
            <svg
              viewBox="0 0 267 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 font-semibold"
            >
              <path
                d="M52.688 31.448H60.048V35H48.208V12.664H52.688V31.448ZM79.3755 25.752C79.3755 26.392 79.3328 26.968 79.2475 27.48H66.2875C66.3942 28.76 66.8422 29.7627 67.6315 30.488C68.4208 31.2133 69.3915 31.576 70.5435 31.576C72.2075 31.576 73.3915 30.8613 74.0955 29.432H78.9275C78.4155 31.1387 77.4342 32.5467 75.9835 33.656C74.5328 34.744 72.7515 35.288 70.6395 35.288C68.9328 35.288 67.3968 34.9147 66.0315 34.168C64.6875 33.4 63.6315 32.3227 62.8635 30.936C62.1168 29.5493 61.7435 27.9493 61.7435 26.136C61.7435 24.3013 62.1168 22.6907 62.8635 21.304C63.6102 19.9173 64.6555 18.8507 65.9995 18.104C67.3435 17.3573 68.8902 16.984 70.6395 16.984C72.3248 16.984 73.8288 17.3467 75.1515 18.072C76.4955 18.7973 77.5302 19.832 78.2555 21.176C79.0022 22.4987 79.3755 24.024 79.3755 25.752ZM74.7355 24.472C74.7142 23.32 74.2982 22.4027 73.4875 21.72C72.6768 21.016 71.6848 20.664 70.5115 20.664C69.4022 20.664 68.4635 21.0053 67.6955 21.688C66.9488 22.3493 66.4902 23.2773 66.3195 24.472H74.7355ZM81.4935 26.072C81.4935 24.28 81.8455 22.6907 82.5495 21.304C83.2748 19.9173 84.2455 18.8507 85.4615 18.104C86.6988 17.3573 88.0748 16.984 89.5895 16.984C90.9122 16.984 92.0642 17.2507 93.0455 17.784C94.0482 18.3173 94.8482 18.9893 95.4455 19.8V17.272H99.9575V35H95.4455V32.408C94.8695 33.24 94.0695 33.9333 93.0455 34.488C92.0428 35.0213 90.8802 35.288 89.5575 35.288C88.0642 35.288 86.6988 34.904 85.4615 34.136C84.2455 33.368 83.2748 32.2907 82.5495 30.904C81.8455 29.496 81.4935 27.8853 81.4935 26.072ZM95.4455 26.136C95.4455 25.048 95.2322 24.12 94.8055 23.352C94.3788 22.5627 93.8028 21.9653 93.0775 21.56C92.3522 21.1333 91.5735 20.92 90.7415 20.92C89.9095 20.92 89.1415 21.1227 88.4375 21.528C87.7335 21.9333 87.1575 22.5307 86.7095 23.32C86.2828 24.088 86.0695 25.0053 86.0695 26.072C86.0695 27.1387 86.2828 28.0773 86.7095 28.888C87.1575 29.6773 87.7335 30.2853 88.4375 30.712C89.1628 31.1387 89.9308 31.352 90.7415 31.352C91.5735 31.352 92.3522 31.1493 93.0775 30.744C93.8028 30.3173 94.3788 29.72 94.8055 28.952C95.2322 28.1627 95.4455 27.224 95.4455 26.136ZM108.813 20.024C109.389 19.0853 110.136 18.3493 111.053 17.816C111.992 17.2827 113.058 17.016 114.253 17.016V21.72H113.069C111.661 21.72 110.594 22.0507 109.869 22.712C109.165 23.3733 108.813 24.5253 108.813 26.168V35H104.333V17.272H108.813V20.024ZM127.095 17.016C129.207 17.016 130.913 17.688 132.215 19.032C133.516 20.3547 134.167 22.2107 134.167 24.6V35H129.687V25.208C129.687 23.8 129.335 22.7227 128.631 21.976C127.927 21.208 126.967 20.824 125.751 20.824C124.513 20.824 123.532 21.208 122.807 21.976C122.103 22.7227 121.751 23.8 121.751 25.208V35H117.271V17.272H121.751V19.48C122.348 18.712 123.105 18.1147 124.023 17.688C124.961 17.24 125.985 17.016 127.095 17.016ZM142.907 11.32V35H138.427V11.32H142.907ZM164.293 17.272L153.317 43.384H148.549L152.389 34.552L145.285 17.272H150.309L154.885 29.656L159.525 17.272H164.293ZM200.486 12.664V35H196.006V25.496H186.438V35H181.958V12.664H186.438V21.848H196.006V12.664H200.486ZM221.536 38.936L218.144 34.872C217.205 35.1067 216.245 35.224 215.264 35.224C213.173 35.224 211.253 34.7333 209.504 33.752C207.754 32.7707 206.368 31.416 205.344 29.688C204.32 27.9387 203.808 25.9653 203.808 23.768C203.808 21.592 204.32 19.64 205.344 17.912C206.368 16.1627 207.754 14.7973 209.504 13.816C211.253 12.8347 213.173 12.344 215.264 12.344C217.376 12.344 219.296 12.8347 221.024 13.816C222.773 14.7973 224.149 16.1627 225.152 17.912C226.176 19.64 226.688 21.592 226.688 23.768C226.688 25.752 226.261 27.5653 225.408 29.208C224.576 30.8293 223.434 32.152 221.984 33.176L227.104 38.936H221.536ZM208.416 23.768C208.416 25.2613 208.704 26.5733 209.28 27.704C209.856 28.8347 210.656 29.7093 211.68 30.328C212.725 30.9253 213.92 31.224 215.264 31.224C216.608 31.224 217.792 30.9253 218.816 30.328C219.84 29.7093 220.64 28.8347 221.216 27.704C221.792 26.5733 222.08 25.2613 222.08 23.768C222.08 22.2747 221.792 20.9733 221.216 19.864C220.64 18.7333 219.84 17.8693 218.816 17.272C217.792 16.6747 216.608 16.376 215.264 16.376C213.92 16.376 212.725 16.6747 211.68 17.272C210.656 17.8693 209.856 18.7333 209.28 19.864C208.704 20.9733 208.416 22.2747 208.416 23.768Z"
                fill="#ffffff"
                fill-opacity="0.7"
              />
              <path
                d="M27.5 15.0625C27.5 13.4308 27.0601 11.8358 26.236 10.479C25.4119 9.12234 24.2406 8.06492 22.8701 7.4405C21.4997 6.81607 19.9917 6.6527 18.5368 6.97103C17.082 7.28935 15.7456 8.07509 14.6967 9.22887C13.6478 10.3827 12.9335 11.8527 12.6441 13.453C12.3547 15.0534 12.5033 16.7122 13.0709 18.2196C13.6386 19.7271 14.5999 21.0156 15.8332 21.9221C17.0666 22.8286 18.5166 23.3125 20 23.3125C21.9885 23.3102 23.8949 22.4403 25.301 20.8936C26.7071 19.3469 27.4979 17.2498 27.5 15.0625ZM20 19.1875C19.2583 19.1875 18.5333 18.9456 17.9166 18.4923C17.2999 18.0391 16.8193 17.3948 16.5355 16.6411C16.2516 15.8873 16.1774 15.0579 16.3221 14.2578C16.4668 13.4576 16.8239 12.7226 17.3484 12.1457C17.8728 11.5688 18.541 11.1759 19.2684 11.0168C19.9958 10.8576 20.7498 10.9393 21.4351 11.2515C22.1203 11.5637 22.706 12.0924 23.118 12.7708C23.5301 13.4491 23.75 14.2467 23.75 15.0625C23.75 16.1565 23.3549 17.2057 22.6517 17.9793C21.9484 18.7529 20.9946 19.1875 20 19.1875ZM29.375 23.3125C27.8916 23.3125 26.4416 23.7964 25.2082 24.7029C23.9749 25.6094 23.0136 26.8979 22.4459 28.4054C21.8782 29.9129 21.7297 31.5717 22.0191 33.172C22.3085 34.7723 23.0228 36.2424 24.0717 37.3961C25.1206 38.5499 26.457 39.3357 27.9118 39.654C29.3667 39.9723 30.8747 39.8089 32.2451 39.1845C33.6156 38.5601 34.7869 37.5027 35.611 36.146C36.4351 34.7893 36.875 33.1942 36.875 31.5625C36.8729 29.3752 36.0821 27.2781 34.676 25.7314C33.2699 24.1847 31.3635 23.3148 29.375 23.3125ZM29.375 35.6875C28.6333 35.6875 27.9083 35.4456 27.2916 34.9923C26.6749 34.5391 26.1943 33.8948 25.9105 33.1411C25.6266 32.3873 25.5524 31.5579 25.6971 30.7578C25.8418 29.9576 26.1989 29.2226 26.7234 28.6457C27.2478 28.0688 27.916 27.6759 28.6434 27.5168C29.3708 27.3576 30.1248 27.4393 30.8101 27.7515C31.4953 28.0637 32.081 28.5924 32.493 29.2708C32.9051 29.9491 33.125 30.7467 33.125 31.5625C33.125 32.6565 32.7299 33.7057 32.0267 34.4793C31.3234 35.2529 30.3696 35.6875 29.375 35.6875ZM10.625 23.3125C9.14164 23.3125 7.6916 23.7964 6.45823 24.7029C5.22486 25.6094 4.26356 26.8979 3.69591 28.4054C3.12825 29.9129 2.97972 31.5717 3.26911 33.172C3.5585 34.7723 4.27281 36.2424 5.3217 37.3961C6.3706 38.5499 7.70697 39.3357 9.16183 39.654C10.6167 39.9723 12.1247 39.8089 13.4951 39.1845C14.8656 38.5601 16.0369 37.5027 16.861 36.146C17.6851 34.7893 18.125 33.1942 18.125 31.5625C18.1229 29.3752 17.3321 27.2781 15.926 25.7314C14.5199 24.1847 12.6135 23.3148 10.625 23.3125ZM10.625 35.6875C9.88332 35.6875 9.1583 35.4456 8.54162 34.9923C7.92493 34.5391 7.44428 33.8948 7.16046 33.1411C6.87663 32.3873 6.80236 31.5579 6.94706 30.7578C7.09175 29.9576 7.44891 29.2226 7.97335 28.6457C8.4978 28.0688 9.16599 27.6759 9.89341 27.5168C10.6208 27.3576 11.3748 27.4393 12.0601 27.7515C12.7453 28.0637 13.331 28.5924 13.743 29.2708C14.1551 29.9491 14.375 30.7467 14.375 31.5625C14.375 32.6565 13.9799 33.7057 13.2767 34.4793C12.5734 35.2529 11.6196 35.6875 10.625 35.6875Z"
                fill="#ffffff"
                fill-opacity="0.7"
              />
            </svg>
          </li>
          <li>
            <svg
              className="h-5"
              viewBox="0 0 375 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.336 11.024C36.6 11.024 39.224 12.032 41.208 14.048C43.224 16.032 44.232 18.816 44.232 22.4V38H37.512V23.312C37.512 21.232 36.984 19.648 35.928 18.56C34.872 17.44 33.432 16.88 31.608 16.88C29.784 16.88 28.328 17.44 27.24 18.56C26.184 19.648 25.656 21.232 25.656 23.312V38H18.936V23.312C18.936 21.232 18.408 19.648 17.352 18.56C16.296 17.44 14.856 16.88 13.032 16.88C11.176 16.88 9.704 17.44 8.616 18.56C7.56 19.648 7.032 21.232 7.032 23.312V38H0.312V11.408H7.032V14.624C7.896 13.504 9 12.624 10.344 11.984C11.72 11.344 13.224 11.024 14.856 11.024C16.936 11.024 18.792 11.472 20.424 12.368C22.056 13.232 23.32 14.48 24.216 16.112C25.08 14.576 26.328 13.344 27.96 12.416C29.624 11.488 31.416 11.024 33.336 11.024ZM48.8809 24.608C48.8809 21.92 49.4089 19.536 50.4649 17.456C51.5529 15.376 53.0089 13.776 54.8329 12.656C56.6889 11.536 58.7529 10.976 61.0249 10.976C63.0089 10.976 64.7369 11.376 66.2089 12.176C67.7129 12.976 68.9129 13.984 69.8089 15.2V11.408H76.5769V38H69.8089V34.112C68.9449 35.36 67.7449 36.4 66.2089 37.232C64.7049 38.032 62.9609 38.432 60.9769 38.432C58.7369 38.432 56.6889 37.856 54.8329 36.704C53.0089 35.552 51.5529 33.936 50.4649 31.856C49.4089 29.744 48.8809 27.328 48.8809 24.608ZM69.8089 24.704C69.8089 23.072 69.4889 21.68 68.8489 20.528C68.2089 19.344 67.3449 18.448 66.2569 17.84C65.1689 17.2 64.0009 16.88 62.7529 16.88C61.5049 16.88 60.3529 17.184 59.2969 17.792C58.2409 18.4 57.3769 19.296 56.7049 20.48C56.0649 21.632 55.7449 23.008 55.7449 24.608C55.7449 26.208 56.0649 27.616 56.7049 28.832C57.3769 30.016 58.2409 30.928 59.2969 31.568C60.3849 32.208 61.5369 32.528 62.7529 32.528C64.0009 32.528 65.1689 32.224 66.2569 31.616C67.3449 30.976 68.2089 30.08 68.8489 28.928C69.4889 27.744 69.8089 26.336 69.8089 24.704ZM90.9641 16.928V29.792C90.9641 30.688 91.1721 31.344 91.5881 31.76C92.0361 32.144 92.7721 32.336 93.7961 32.336H96.9161V38H92.6921C87.0281 38 84.1961 35.248 84.1961 29.744V16.928H81.0281V11.408H84.1961V4.832H90.9641V11.408H96.9161V16.928H90.9641ZM108.47 15.536C109.334 14.128 110.454 13.024 111.83 12.224C113.238 11.424 114.838 11.024 116.63 11.024V18.08H114.854C112.742 18.08 111.142 18.576 110.054 19.568C108.998 20.56 108.47 22.288 108.47 24.752V38H101.75V11.408H108.47V15.536ZM124.564 8.24C123.38 8.24 122.388 7.872 121.588 7.136C120.82 6.368 120.436 5.424 120.436 4.304C120.436 3.184 120.82 2.256 121.588 1.52C122.388 0.751998 123.38 0.367998 124.564 0.367998C125.748 0.367998 126.724 0.751998 127.492 1.52C128.292 2.256 128.692 3.184 128.692 4.304C128.692 5.424 128.292 6.368 127.492 7.136C126.724 7.872 125.748 8.24 124.564 8.24ZM127.876 11.408V38H121.156V11.408H127.876ZM149.203 38L143.731 29.744L138.883 38H131.683L140.371 24.656L131.587 11.408H139.171L144.595 19.616L149.491 11.408H156.691L147.955 24.656L156.787 38H149.203ZM180.885 18.032V23.696H160.533V18.032H180.885ZM213.141 24.128C213.141 25.088 213.077 25.952 212.949 26.72H193.509C193.669 28.64 194.341 30.144 195.525 31.232C196.709 32.32 198.165 32.864 199.893 32.864C202.389 32.864 204.165 31.792 205.221 29.648H212.469C211.701 32.208 210.229 34.32 208.053 35.984C205.877 37.616 203.205 38.432 200.037 38.432C197.477 38.432 195.173 37.872 193.125 36.752C191.109 35.6 189.525 33.984 188.373 31.904C187.253 29.824 186.693 27.424 186.693 24.704C186.693 21.952 187.253 19.536 188.373 17.456C189.493 15.376 191.061 13.776 193.077 12.656C195.093 11.536 197.413 10.976 200.037 10.976C202.565 10.976 204.821 11.52 206.805 12.608C208.821 13.696 210.373 15.248 211.461 17.264C212.581 19.248 213.141 21.536 213.141 24.128ZM206.181 22.208C206.149 20.48 205.525 19.104 204.309 18.08C203.093 17.024 201.605 16.496 199.845 16.496C198.181 16.496 196.773 17.008 195.621 18.032C194.501 19.024 193.813 20.416 193.557 22.208H206.181ZM224.766 2.48V38H218.046V2.48H224.766ZM234.814 8.24C233.63 8.24 232.638 7.872 231.838 7.136C231.07 6.368 230.686 5.424 230.686 4.304C230.686 3.184 231.07 2.256 231.838 1.52C232.638 0.751998 233.63 0.367998 234.814 0.367998C235.998 0.367998 236.974 0.751998 237.742 1.52C238.542 2.256 238.942 3.184 238.942 4.304C238.942 5.424 238.542 6.368 237.742 7.136C236.974 7.872 235.998 8.24 234.814 8.24ZM238.126 11.408V38H231.406V11.408H238.126ZM251.485 15.296C252.349 14.016 253.533 12.976 255.037 12.176C256.573 11.376 258.317 10.976 260.269 10.976C262.541 10.976 264.589 11.536 266.413 12.656C268.269 13.776 269.725 15.376 270.781 17.456C271.869 19.504 272.413 21.888 272.413 24.608C272.413 27.328 271.869 29.744 270.781 31.856C269.725 33.936 268.269 35.552 266.413 36.704C264.589 37.856 262.541 38.432 260.269 38.432C258.285 38.432 256.541 38.048 255.037 37.28C253.565 36.48 252.381 35.456 251.485 34.208V38H244.765V2.48H251.485V15.296ZM265.549 24.608C265.549 23.008 265.213 21.632 264.541 20.48C263.901 19.296 263.037 18.4 261.949 17.792C260.893 17.184 259.741 16.88 258.493 16.88C257.277 16.88 256.125 17.2 255.037 17.84C253.981 18.448 253.117 19.344 252.445 20.528C251.805 21.712 251.485 23.104 251.485 24.704C251.485 26.304 251.805 27.696 252.445 28.88C253.117 30.064 253.981 30.976 255.037 31.616C256.125 32.224 257.277 32.528 258.493 32.528C259.741 32.528 260.893 32.208 261.949 31.568C263.037 30.928 263.901 30.016 264.541 28.832C265.213 27.648 265.549 26.24 265.549 24.608ZM284.016 15.536C284.88 14.128 286 13.024 287.376 12.224C288.784 11.424 290.384 11.024 292.176 11.024V18.08H290.4C288.288 18.08 286.688 18.576 285.6 19.568C284.544 20.56 284.016 22.288 284.016 24.752V38H277.296V11.408H284.016V15.536ZM294.975 24.608C294.975 21.92 295.503 19.536 296.559 17.456C297.647 15.376 299.103 13.776 300.927 12.656C302.783 11.536 304.847 10.976 307.119 10.976C309.103 10.976 310.831 11.376 312.303 12.176C313.807 12.976 315.007 13.984 315.903 15.2V11.408H322.671V38H315.903V34.112C315.039 35.36 313.839 36.4 312.303 37.232C310.799 38.032 309.055 38.432 307.071 38.432C304.831 38.432 302.783 37.856 300.927 36.704C299.103 35.552 297.647 33.936 296.559 31.856C295.503 29.744 294.975 27.328 294.975 24.608ZM315.903 24.704C315.903 23.072 315.583 21.68 314.943 20.528C314.303 19.344 313.439 18.448 312.351 17.84C311.263 17.2 310.095 16.88 308.847 16.88C307.599 16.88 306.447 17.184 305.391 17.792C304.335 18.4 303.471 19.296 302.799 20.48C302.159 21.632 301.839 23.008 301.839 24.608C301.839 26.208 302.159 27.616 302.799 28.832C303.471 30.016 304.335 30.928 305.391 31.568C306.479 32.208 307.631 32.528 308.847 32.528C310.095 32.528 311.263 32.224 312.351 31.616C313.439 30.976 314.303 30.08 314.943 28.928C315.583 27.744 315.903 26.336 315.903 24.704ZM335.954 15.536C336.818 14.128 337.938 13.024 339.314 12.224C340.722 11.424 342.322 11.024 344.114 11.024V18.08H342.338C340.226 18.08 338.626 18.576 337.538 19.568C336.482 20.56 335.954 22.288 335.954 24.752V38H329.234V11.408H335.954V15.536ZM374.08 11.408L357.616 50.576H350.464L356.224 37.328L345.568 11.408H353.104L359.968 29.984L366.928 11.408H374.08Z"
                fill="#ffffff"
                fill-opacity="0.7"
              />
            </svg>
          </li>
          <li>
            <svg
              className="h-5"
              viewBox="0 0 540 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 31.808L21.12 11.408H28.272L18.432 38H10.272L0.48 11.408H7.68L14.4 31.808ZM30.3184 24.608C30.3184 21.92 30.8464 19.536 31.9024 17.456C32.9904 15.376 34.4464 13.776 36.2704 12.656C38.1264 11.536 40.1904 10.976 42.4624 10.976C44.4464 10.976 46.1744 11.376 47.6464 12.176C49.1504 12.976 50.3504 13.984 51.2464 15.2V11.408H58.0144V38H51.2464V34.112C50.3824 35.36 49.1824 36.4 47.6464 37.232C46.1424 38.032 44.3984 38.432 42.4144 38.432C40.1744 38.432 38.1264 37.856 36.2704 36.704C34.4464 35.552 32.9904 33.936 31.9024 31.856C30.8464 29.744 30.3184 27.328 30.3184 24.608ZM51.2464 24.704C51.2464 23.072 50.9264 21.68 50.2864 20.528C49.6464 19.344 48.7824 18.448 47.6944 17.84C46.6064 17.2 45.4384 16.88 44.1904 16.88C42.9424 16.88 41.7904 17.184 40.7344 17.792C39.6784 18.4 38.8144 19.296 38.1424 20.48C37.5024 21.632 37.1824 23.008 37.1824 24.608C37.1824 26.208 37.5024 27.616 38.1424 28.832C38.8144 30.016 39.6784 30.928 40.7344 31.568C41.8224 32.208 42.9744 32.528 44.1904 32.528C45.4384 32.528 46.6064 32.224 47.6944 31.616C48.7824 30.976 49.6464 30.08 50.2864 28.928C50.9264 27.744 51.2464 26.336 51.2464 24.704ZM74.7536 38.432C72.5776 38.432 70.6256 38.048 68.8976 37.28C67.1696 36.48 65.7936 35.408 64.7696 34.064C63.7776 32.72 63.2336 31.232 63.1376 29.6H69.9056C70.0336 30.624 70.5296 31.472 71.3936 32.144C72.2896 32.816 73.3936 33.152 74.7056 33.152C75.9856 33.152 76.9776 32.896 77.6816 32.384C78.4176 31.872 78.7856 31.216 78.7856 30.416C78.7856 29.552 78.3376 28.912 77.4416 28.496C76.5776 28.048 75.1856 27.568 73.2656 27.056C71.2816 26.576 69.6496 26.08 68.3696 25.568C67.1216 25.056 66.0336 24.272 65.1056 23.216C64.2096 22.16 63.7616 20.736 63.7616 18.944C63.7616 17.472 64.1776 16.128 65.0096 14.912C65.8736 13.696 67.0896 12.736 68.6576 12.032C70.2576 11.328 72.1296 10.976 74.2736 10.976C77.4416 10.976 79.9696 11.776 81.8576 13.376C83.7456 14.944 84.7856 17.072 84.9776 19.76H78.5456C78.4496 18.704 78.0016 17.872 77.2016 17.264C76.4336 16.624 75.3936 16.304 74.0816 16.304C72.8656 16.304 71.9216 16.528 71.2496 16.976C70.6096 17.424 70.2896 18.048 70.2896 18.848C70.2896 19.744 70.7376 20.432 71.6336 20.912C72.5296 21.36 73.9216 21.824 75.8096 22.304C77.7296 22.784 79.3136 23.28 80.5616 23.792C81.8096 24.304 82.8816 25.104 83.7776 26.192C84.7056 27.248 85.1856 28.656 85.2176 30.416C85.2176 31.952 84.7856 33.328 83.9216 34.544C83.0896 35.76 81.8736 36.72 80.2736 37.424C78.7056 38.096 76.8656 38.432 74.7536 38.432ZM89.0059 24.704C89.0059 21.952 89.5659 19.552 90.6859 17.504C91.8059 15.424 93.3579 13.824 95.3419 12.704C97.3259 11.552 99.5979 10.976 102.158 10.976C105.454 10.976 108.174 11.808 110.318 13.472C112.494 15.104 113.95 17.408 114.686 20.384H107.438C107.054 19.232 106.398 18.336 105.47 17.696C104.574 17.024 103.454 16.688 102.11 16.688C100.19 16.688 98.6699 17.392 97.5499 18.8C96.4299 20.176 95.8699 22.144 95.8699 24.704C95.8699 27.232 96.4299 29.2 97.5499 30.608C98.6699 31.984 100.19 32.672 102.11 32.672C104.83 32.672 106.606 31.456 107.438 29.024H114.686C113.95 31.904 112.494 34.192 110.318 35.888C108.142 37.584 105.422 38.432 102.158 38.432C99.5979 38.432 97.3259 37.872 95.3419 36.752C93.3579 35.6 91.8059 34 90.6859 31.952C89.5659 29.872 89.0059 27.456 89.0059 24.704ZM131.417 38.432C128.857 38.432 126.553 37.872 124.505 36.752C122.457 35.6 120.841 33.984 119.657 31.904C118.505 29.824 117.929 27.424 117.929 24.704C117.929 21.984 118.521 19.584 119.705 17.504C120.921 15.424 122.569 13.824 124.649 12.704C126.729 11.552 129.049 10.976 131.609 10.976C134.169 10.976 136.489 11.552 138.569 12.704C140.649 13.824 142.281 15.424 143.465 17.504C144.681 19.584 145.289 21.984 145.289 24.704C145.289 27.424 144.665 29.824 143.417 31.904C142.201 33.984 140.537 35.6 138.425 36.752C136.345 37.872 134.009 38.432 131.417 38.432ZM131.417 32.576C132.633 32.576 133.769 32.288 134.825 31.712C135.913 31.104 136.777 30.208 137.417 29.024C138.057 27.84 138.377 26.4 138.377 24.704C138.377 22.176 137.705 20.24 136.361 18.896C135.049 17.52 133.433 16.832 131.513 16.832C129.593 16.832 127.977 17.52 126.665 18.896C125.385 20.24 124.745 22.176 124.745 24.704C124.745 27.232 125.369 29.184 126.617 30.56C127.897 31.904 129.497 32.576 131.417 32.576ZM156.938 15.248C157.802 14.032 158.986 13.024 160.49 12.224C162.026 11.392 163.77 10.976 165.722 10.976C167.994 10.976 170.042 11.536 171.866 12.656C173.722 13.776 175.178 15.376 176.234 17.456C177.322 19.504 177.866 21.888 177.866 24.608C177.866 27.328 177.322 29.744 176.234 31.856C175.178 33.936 173.722 35.552 171.866 36.704C170.042 37.856 167.994 38.432 165.722 38.432C163.77 38.432 162.042 38.032 160.538 37.232C159.066 36.432 157.866 35.424 156.938 34.208V50.672H150.218V11.408H156.938V15.248ZM171.002 24.608C171.002 23.008 170.666 21.632 169.994 20.48C169.354 19.296 168.49 18.4 167.402 17.792C166.346 17.184 165.194 16.88 163.946 16.88C162.73 16.88 161.578 17.2 160.49 17.84C159.434 18.448 158.57 19.344 157.898 20.528C157.258 21.712 156.938 23.104 156.938 24.704C156.938 26.304 157.258 27.696 157.898 28.88C158.57 30.064 159.434 30.976 160.49 31.616C161.578 32.224 162.73 32.528 163.946 32.528C165.194 32.528 166.346 32.208 167.402 31.568C168.49 30.928 169.354 30.016 169.994 28.832C170.666 27.648 171.002 26.24 171.002 24.608ZM197.726 11.024C199.742 11.024 201.534 11.472 203.102 12.368C204.67 13.232 205.886 14.528 206.75 16.256C207.646 17.952 208.094 20 208.094 22.4V38H201.374V23.312C201.374 21.2 200.846 19.584 199.79 18.464C198.734 17.312 197.294 16.736 195.47 16.736C193.614 16.736 192.142 17.312 191.054 18.464C189.998 19.584 189.47 21.2 189.47 23.312V38H182.75V2.48H189.47V14.72C190.334 13.568 191.486 12.672 192.926 12.032C194.366 11.36 195.966 11.024 197.726 11.024ZM212.756 24.608C212.756 21.92 213.284 19.536 214.34 17.456C215.428 15.376 216.884 13.776 218.708 12.656C220.564 11.536 222.628 10.976 224.9 10.976C226.884 10.976 228.612 11.376 230.084 12.176C231.588 12.976 232.788 13.984 233.684 15.2V11.408H240.452V38H233.684V34.112C232.82 35.36 231.62 36.4 230.084 37.232C228.58 38.032 226.836 38.432 224.852 38.432C222.612 38.432 220.564 37.856 218.708 36.704C216.884 35.552 215.428 33.936 214.34 31.856C213.284 29.744 212.756 27.328 212.756 24.608ZM233.684 24.704C233.684 23.072 233.364 21.68 232.724 20.528C232.084 19.344 231.22 18.448 230.132 17.84C229.044 17.2 227.876 16.88 226.628 16.88C225.38 16.88 224.228 17.184 223.172 17.792C222.116 18.4 221.252 19.296 220.58 20.48C219.94 21.632 219.62 23.008 219.62 24.608C219.62 26.208 219.94 27.616 220.58 28.832C221.252 30.016 222.116 30.928 223.172 31.568C224.26 32.208 225.412 32.528 226.628 32.528C227.876 32.528 229.044 32.224 230.132 31.616C231.22 30.976 232.084 30.08 232.724 28.928C233.364 27.744 233.684 26.336 233.684 24.704ZM253.735 15.536C254.599 14.128 255.719 13.024 257.095 12.224C258.503 11.424 260.103 11.024 261.895 11.024V18.08H260.119C258.007 18.08 256.407 18.576 255.319 19.568C254.263 20.56 253.735 22.288 253.735 24.752V38H247.015V11.408H253.735V15.536ZM299.445 11.024C302.709 11.024 305.333 12.032 307.317 14.048C309.333 16.032 310.341 18.816 310.341 22.4V38H303.621V23.312C303.621 21.232 303.093 19.648 302.037 18.56C300.981 17.44 299.541 16.88 297.717 16.88C295.893 16.88 294.437 17.44 293.349 18.56C292.293 19.648 291.765 21.232 291.765 23.312V38H285.045V23.312C285.045 21.232 284.517 19.648 283.461 18.56C282.405 17.44 280.965 16.88 279.141 16.88C277.285 16.88 275.813 17.44 274.725 18.56C273.669 19.648 273.141 21.232 273.141 23.312V38H266.421V11.408H273.141V14.624C274.005 13.504 275.109 12.624 276.453 11.984C277.829 11.344 279.333 11.024 280.965 11.024C283.045 11.024 284.901 11.472 286.533 12.368C288.165 13.232 289.429 14.48 290.325 16.112C291.189 14.576 292.437 13.344 294.069 12.416C295.733 11.488 297.525 11.024 299.445 11.024ZM314.99 24.608C314.99 21.92 315.518 19.536 316.574 17.456C317.662 15.376 319.118 13.776 320.942 12.656C322.798 11.536 324.862 10.976 327.134 10.976C329.118 10.976 330.846 11.376 332.318 12.176C333.822 12.976 335.022 13.984 335.918 15.2V11.408H342.686V38H335.918V34.112C335.054 35.36 333.854 36.4 332.318 37.232C330.814 38.032 329.07 38.432 327.086 38.432C324.846 38.432 322.798 37.856 320.942 36.704C319.118 35.552 317.662 33.936 316.574 31.856C315.518 29.744 314.99 27.328 314.99 24.608ZM335.918 24.704C335.918 23.072 335.598 21.68 334.958 20.528C334.318 19.344 333.454 18.448 332.366 17.84C331.278 17.2 330.11 16.88 328.862 16.88C327.614 16.88 326.462 17.184 325.406 17.792C324.35 18.4 323.486 19.296 322.814 20.48C322.174 21.632 321.854 23.008 321.854 24.608C321.854 26.208 322.174 27.616 322.814 28.832C323.486 30.016 324.35 30.928 325.406 31.568C326.494 32.208 327.646 32.528 328.862 32.528C330.11 32.528 331.278 32.224 332.366 31.616C333.454 30.976 334.318 30.08 334.958 28.928C335.598 27.744 335.918 26.336 335.918 24.704ZM347.521 24.704C347.521 21.952 348.082 19.552 349.202 17.504C350.322 15.424 351.874 13.824 353.858 12.704C355.842 11.552 358.114 10.976 360.674 10.976C363.97 10.976 366.69 11.808 368.834 13.472C371.01 15.104 372.466 17.408 373.202 20.384H365.954C365.57 19.232 364.914 18.336 363.986 17.696C363.09 17.024 361.97 16.688 360.626 16.688C358.706 16.688 357.186 17.392 356.066 18.8C354.946 20.176 354.386 22.144 354.386 24.704C354.386 27.232 354.946 29.2 356.066 30.608C357.186 31.984 358.706 32.672 360.626 32.672C363.346 32.672 365.122 31.456 365.954 29.024H373.202C372.466 31.904 371.01 34.192 368.834 35.888C366.658 37.584 363.938 38.432 360.674 38.432C358.114 38.432 355.842 37.872 353.858 36.752C351.874 35.6 350.322 34 349.202 31.952C348.082 29.872 347.521 27.456 347.521 24.704ZM402.845 24.128C402.845 25.088 402.781 25.952 402.653 26.72H383.213C383.373 28.64 384.045 30.144 385.229 31.232C386.413 32.32 387.869 32.864 389.597 32.864C392.093 32.864 393.869 31.792 394.925 29.648H402.173C401.405 32.208 399.933 34.32 397.757 35.984C395.581 37.616 392.909 38.432 389.741 38.432C387.181 38.432 384.877 37.872 382.829 36.752C380.813 35.6 379.229 33.984 378.077 31.904C376.957 29.824 376.396 27.424 376.396 24.704C376.396 21.952 376.957 19.536 378.077 17.456C379.197 15.376 380.765 13.776 382.781 12.656C384.797 11.536 387.117 10.976 389.741 10.976C392.269 10.976 394.525 11.52 396.509 12.608C398.525 13.696 400.077 15.248 401.165 17.264C402.285 19.248 402.845 21.536 402.845 24.128ZM395.885 22.208C395.853 20.48 395.229 19.104 394.013 18.08C392.797 17.024 391.309 16.496 389.549 16.496C387.885 16.496 386.477 17.008 385.325 18.032C384.205 19.024 383.517 20.416 383.261 22.208H395.885ZM432.854 11.408V38H426.086V34.64C425.222 35.792 424.086 36.704 422.678 37.376C421.302 38.016 419.798 38.336 418.166 38.336C416.086 38.336 414.246 37.904 412.646 37.04C411.046 36.144 409.782 34.848 408.854 33.152C407.958 31.424 407.51 29.376 407.51 27.008V11.408H414.23V26.048C414.23 28.16 414.758 29.792 415.814 30.944C416.87 32.064 418.31 32.624 420.134 32.624C421.99 32.624 423.446 32.064 424.502 30.944C425.558 29.792 426.086 28.16 426.086 26.048V11.408H432.854ZM447.308 16.928V29.792C447.308 30.688 447.516 31.344 447.932 31.76C448.38 32.144 449.116 32.336 450.14 32.336H453.26V38H449.036C443.372 38 440.54 35.248 440.54 29.744V16.928H437.372V11.408H440.54V4.832H447.308V11.408H453.26V16.928H447.308ZM461.501 8.24C460.317 8.24 459.325 7.872 458.525 7.136C457.757 6.368 457.373 5.424 457.373 4.304C457.373 3.184 457.757 2.256 458.525 1.52C459.325 0.751998 460.317 0.367998 461.501 0.367998C462.685 0.367998 463.661 0.751998 464.429 1.52C465.229 2.256 465.629 3.184 465.629 4.304C465.629 5.424 465.229 6.368 464.429 7.136C463.661 7.872 462.685 8.24 461.501 8.24ZM464.813 11.408V38H458.093V11.408H464.813ZM469.725 24.704C469.725 21.952 470.285 19.552 471.405 17.504C472.525 15.424 474.077 13.824 476.061 12.704C478.045 11.552 480.317 10.976 482.877 10.976C486.173 10.976 488.893 11.808 491.037 13.472C493.213 15.104 494.669 17.408 495.405 20.384H488.157C487.773 19.232 487.117 18.336 486.189 17.696C485.293 17.024 484.173 16.688 482.829 16.688C480.909 16.688 479.389 17.392 478.269 18.8C477.149 20.176 476.589 22.144 476.589 24.704C476.589 27.232 477.149 29.2 478.269 30.608C479.389 31.984 480.909 32.672 482.829 32.672C485.549 32.672 487.325 31.456 488.157 29.024H495.405C494.669 31.904 493.213 34.192 491.037 35.888C488.861 37.584 486.141 38.432 482.877 38.432C480.317 38.432 478.045 37.872 476.061 36.752C474.077 35.6 472.525 34 471.405 31.952C470.285 29.872 469.725 27.456 469.725 24.704ZM498.6 24.608C498.6 21.92 499.128 19.536 500.184 17.456C501.272 15.376 502.728 13.776 504.552 12.656C506.408 11.536 508.472 10.976 510.744 10.976C512.728 10.976 514.456 11.376 515.928 12.176C517.432 12.976 518.632 13.984 519.528 15.2V11.408H526.296V38H519.528V34.112C518.664 35.36 517.464 36.4 515.928 37.232C514.424 38.032 512.68 38.432 510.696 38.432C508.456 38.432 506.408 37.856 504.552 36.704C502.728 35.552 501.272 33.936 500.184 31.856C499.128 29.744 498.6 27.328 498.6 24.608ZM519.528 24.704C519.528 23.072 519.208 21.68 518.568 20.528C517.928 19.344 517.064 18.448 515.976 17.84C514.888 17.2 513.72 16.88 512.472 16.88C511.224 16.88 510.072 17.184 509.016 17.792C507.96 18.4 507.096 19.296 506.424 20.48C505.784 21.632 505.464 23.008 505.464 24.608C505.464 26.208 505.784 27.616 506.424 28.832C507.096 30.016 507.96 30.928 509.016 31.568C510.104 32.208 511.256 32.528 512.472 32.528C513.72 32.528 514.888 32.224 515.976 31.616C517.064 30.976 517.928 30.08 518.568 28.928C519.208 27.744 519.528 26.336 519.528 24.704ZM539.579 2.48V38H532.859V2.48H539.579Z"
                fill="#FFFFFF"
                fill-opacity="0.7"
              />
            </svg>
          </li>
          <li>
            <p className="text-lg font-bold text-[#f6f3f3]">KELI ORG</p>
          </li>
          <li>
            <p className="text-lg font-bold text-slate-200">Space Me</p>
          </li>
          <li>
            <p className="text-lg font-bold text-slate-200">Golden Trusty</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Proof;
