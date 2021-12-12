const ReaperCat = ({ id, name, className }) => {
	return (
		<>
			<svg
				name={name}
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 3000 3000"
			>
				<path
					fill="#fff"
					d="M2031.3484 1966.0157c14.0079-3.0702 34.2717-10.6167 45.0309-16.7703 32.0292-18.3184 84.7602-67.1579 103.4032-95.7723 29.168-44.7683 56.9866-152.8641 66.6461-258.9678 6.2217-68.344 8.9491-78.4965 35.9083-133.6731 23.4529-48.0004 27.6802-53.2756 72.9861-91.0744 8.7672-7.3144 17.9396-17.6868 20.3835-23.05 9.3873-20.6034-5.7411-63.8993-28.1287-80.5001-16.1087-11.9451-50.3664-13.1918-77.8913-2.8346-17.91 6.7392-28.6761 15.1528-57.4533 44.8996-60.248 62.2777-70.7213 94.366-81.2812 249.0333-6.5297 95.6367-15.8796 145.4149-34.2 182.0804-14.7419 29.5031-42.5671 68.4236-59.6982 83.5031-15.4583 13.6067-19.6335 21.5755-42.7523 81.5956-14.0915 36.5839-25.621 67.8134-25.621 69.3986 0 3.3729 26.6417.027 62.6679-7.868zM1518.1052 475.37641c2.4587-2.42781 5.5897-8.15739 6.9568-12.73258 3.4904-11.6803-2.6827-12.52651-66.3621-9.09832-43.5393 2.34387-61.1703 5.10947-86.9009 13.63155-17.7538 5.88014-32.2797 12.1428-32.2797 13.91693 0 5.04524 173.3041-.50327 178.5859-5.71758zM804.62978 1161.1138c13.35561-11.0014 25.8427-21.4525 27.74839-23.2246 5.26113-4.8914-7.41211-15.4632-18.5367-15.4632-10.40343 0-31.33789 15.4072-38.09875 28.0403-3.71312 6.9379-1.55682 30.65 2.78704 30.65.99935 0 12.74441-9.001 26.10002-20.0025zm831.69582-607.55117c-23.6737-8.45766-40.4567-19.92778-41.7109-28.50621-1.1968-8.19061 29.8517-71.74559 41.2406-84.41736 8.82-9.81349 22.6808-8.44414 31.7939 3.14109 8.8277 11.22293 26.3734 61.55096 30.2709 86.82958 3.5037 22.72713-2.0123 28.4329-27.2793 28.21655-11.0341-.0942-26.476-2.4631-34.3152-5.26365zm-595.4721 21.81052c-5.302-5.85873-6.5243-15.71813-6.5243-52.62086 0-24.97627 1.7168-49.92788 3.8157-55.44779 5.0871-13.38008 20.3388-13.42616 30.8264-.0942 7.7649 9.87156 24.0483 70.05728 24.0483 88.8867 0 18.5687-39.5725 33.19087-52.1661 19.2753zm477.3903 490.38075c-14.5272-7.577-23.8883-18.8463-37.688-45.3708-16.7393-32.17513-23.6556-63.83803-23.6556-108.29513 0-54.1182 5.0246-76.9904 22.5252-102.53231 19.7752-28.86165 45.0054-44.3028 72.3892-44.3028 22.6702 0 46.0473 9.82908 60.6805 25.5133 33.1451 35.52621 40.5123 163.27691 12.7088 220.36874-22.797 46.8104-72.8889 72.3898-106.9601 54.619zm-281.0517 4.8288c-9.937-8.0932-31.2455-49.9749-29.9535-58.8733 1.516-10.4396 12.5808-13.59813 49.3931-14.09973 52.079-.7097 56.8173 12.04953 19.268 51.88213-25.6869 27.2492-28.9578 29.0314-38.7076 21.0909zm-243.94624-2.4534c-27.5183-17.1488-40.39693-38.9776-57.15732-96.87863-7.1548-24.7174-8.86152-40.0078-8.68147-77.7845.20362-42.5367 1.18629-48.9183 10.317-66.9362 14.07549-27.77705 29.04467-44.40597 47.53441-52.80471 20.98032-9.52999 31.41632-9.12179 55.68742 2.17874 15.4978 7.21559 23.5487 14.39297 33.9704 30.28514 20.402 31.10993 27.403 59.85173 27.4703 112.77673.095 73.9924-22.84 137.71953-54.2925 150.86133-18.5341 7.7441-40.8035 7.0546-54.84824-1.6979zm283.65074 238.3812c9.9571-7.0097 23.896-36.1608 31.2351-65.3233 4.1635-16.5444 11.1089-22.4741 21.6058-18.4462 4.3427 1.6664 5.9704 9.0118 6.2592 28.2443.5732 38.2185 3.1466 44.2963 23.0136 54.359 22.8389 11.5679 56.8199 11.9499 78.5133.8827 19.0346-9.7105 40.0054-37.356 51.2328-67.5385l8.4214-22.6381 29.7477.2371c62.8865.5012 136.2085-12.3146 178.172-31.1425 57.3884-25.7483 103.7846-65.3632 136.8125-116.8149 30.34-62.1137 37.2482-107.34783 37.1206-175.88543-.2477-64.0678-6.6326-143.38101-16.6791-179.89061-6.4987-23.61634-26.5884-61.62376-52.7683-99.83178-25.0596-36.57315-25.6108-37.76487-43.1519-93.26902-17.5617-55.56941-66.8726-164.1994-81.9553-180.54431-16.513-17.89464-32.5676-15.10009-56.196 9.7818-10.7286 11.29796-23.543 25.82386-28.4761 32.27974-11.7312 15.35258-64.65 117.39034-64.65 124.65783 0 4.77716-18.3344 5.53292-122.2716 5.04044-120.9524-.57316-140.1633.82891-210.3073 15.34899-8.4139 1.74158-11.6133-.87208-22.8771-18.68981-45.0821-71.31204-84.4343-128.66055-98.4442-143.46344-15.5196-16.39802-16.9419-17.02103-34.3624-15.05744-23.0204 2.59465-32.8338 13.42548-44.2585 48.84751-7.35586 22.80576-8.75459 38.06532-10.38692 113.29683-1.73959 80.17877-2.44826 87.11976-9.11355 89.23512-14.74136 4.67883-64.80627 64.18947-85.64213 101.80086-38.21484 68.98221-49.11336 110.97968-48.68991 187.63309.39441 71.4428 7.08118 105.5023 29.19104 148.68243 27.12358 52.9722 45.52498 75.773 78.83445 97.6815l29.95088 19.6994.32082 27.3889c.43594 37.0896 5.90629 54.2759 22.58492 70.9543 26.0737 26.0738 57.7118 34.7263 85.1135 23.277 15.6023-6.5189 24.4552-18.8321 33.5096-46.6074 5.5133-16.9114 8.1376-20.2351 15.9781-20.2351 9.0256 0 9.4591 1.2933 11.4267 34.0717 1.8659 31.0887 3.0649 35.1433 13.6944 46.3109 15.7392 16.5361 23.8711 20.6173 46.8636 23.5209 26.4407 3.339 48.8512.4357 60.6272-7.8545zm-315.65304 64.5213c14.67851-9.5094 28.76426-18.0552 31.30166-18.9908 2.7779-1.024-.97979-7.7324-9.44609-16.8624-7.7331-8.3389-22.36189-26.1661-32.50863-39.6161-10.14673-13.4498-19.70392-24.4543-21.23845-24.4543-1.53421 0-14.13145 10.2712-27.99386 22.8246l-25.20393 22.8246 27.24447 35.8638c14.98409 19.7251 28.12437 35.827 29.20035 35.7821 1.07599-.044 13.96599-7.8621 28.64448-17.3715zm154.88634 10.8387c4.8811-32.1024 5.7333-87.3558 1.3441-87.1455-1.6141.077-7.6839 4.0391-13.4887 8.8037-9.5684 7.8542-10.7994 11.95-13.1858 43.877-2.3824 31.8758-1.7956 36.815 6.1907 52.098 4.8529 9.2861 10.1815 15.4486 11.8421 13.6945 1.6602-1.7541 4.9441-15.8516 7.2976-31.3277zm221.0425 118.0456c66.3065-12.457 75.5249-14.6054 104.0769-24.2564 16.1399-5.4553 37.058-14.304 46.4844-19.6634 9.4265-5.3596 47.5041-25.1305 84.6171-43.9352 113.661-57.5911 238.1723-149.8438 282.6557-209.425 22.9906-30.7932 62.866-122.2168 75.4118-172.8967 4.694-18.9618 12.031-44.99983 16.3048-57.86213 6.9862-21.0253 7.5906-31.0972 5.9884-99.7737-2.1688-92.96615-9.4565-143.86221-29.4269-205.50653-19.9896-61.70222-39.4263-94.66818-66.9997-113.63549-22.9606-15.79385-54.5267-31.02309-57.7084-27.84123-1.0948 1.09459.3678 8.50854 3.2475 16.47526 3.744 10.35411 10.8597 18.08136 24.9496 27.09472 32.761 20.95694 52.4619 49.99777 66.4184 97.90674 3.7612 12.91193 9.3291 31.39943 12.3731 41.08325 14.5397 46.25697 23.9994 227.56238 13.3322 255.52918-2.3046 6.0422-8.7246 28.9315-14.2664 50.86503-11.7491 46.5002-46.6876 131.4527-66.0745 160.6606-22.3654 33.6946-78.7562 85.8936-132.5339 122.6809-72.3922 49.5212-114.2549 75.1059-145.436 88.8846-15.064 6.6565-44.332 21.2577-65.0404 32.4469-62.9897 34.0352-102.0806 45.2056-195.4746 55.8574-27.9409 3.1868-33.5354 2.732-46.2621-3.7609-32.1412-16.3971-54.3035-53.8824-62.7068-106.061-2.1508-13.3554-4.4108-24.4896-5.0227-24.7426-.6116-.2532-6.8342-3.6408-13.8282-7.5284l-12.7164-7.0684v15.1533c0 27.5218 8.2367 60.3785 23.3205 93.0273 12.0578 26.0987 18.7453 35.2597 35.2819 48.3314 11.2227 8.8709 25.0773 17.1543 30.7878 18.4077 5.711 1.2532 12.1443 2.8655 14.2963 3.5836 9.9077 3.305 45.1175 1.3858 73.9506-4.0308zm-289.0839-6.5166c12.8764-7.2734 28.6934-15.8652 35.1493-19.093 13.0442-6.5217 16.0871-16.4116 9.9869-32.4569-3.6992-9.729-5.3283-10.4485-18.1968-8.0342-13.6718 2.5647-13.9816 2.3668-9.4766-6.0511 10.072-18.8195-5.4758-36.0258-27.3779-30.2981-7.4772 1.9552-7.5261 1.6211-1.3076-8.9058 8.0852-13.6874 4.6416-23.5475-8.2241-23.5475-16.8434 0-99.95519 54.5903-99.95519 65.6535 0 10.1777 30.10703 57.8518 43.82258 69.3929 11.13389 9.3684 15.01535 10.3991 32.40841 8.6039 12.2435-1.2638 28.6652-7.0698 43.171-15.2637zm-387.14883 76.0517c8.72795-39.4912 31.54969-90.0333 61.89369-137.0747 15.75015-24.417 84.15972-93.0614 132.1169-132.5701 48.16211-39.6779 85.47427-72.4011 85.47427-74.9619 0-1.5589-7.98418-16.8447-17.74243-33.9683-17.47772-30.6694-35.10039-52.7996-42.04546-52.7996-8.11485 0-78.11778 56.7233-116.52933 94.4239-30.94668 30.3736-49.75308 53.3424-74.86081 91.4291-42.75013 64.8487-52.2427 84.0573-61.80261 125.0568-8.56451 36.7309-8.02183 61.5506 2.2091 101.0333 7.79059 30.0643 7.87236 30.1914 19.43194 30.1914 7.15286 0 10.05967-2.6383 11.85474-10.7599zm351.35983 107.5991c3.876-14.4633 2.8449-18.5853-4.649-18.5853-15.95166 0-48.24081-12.694-57.59405-22.6423-17.14265-18.2328-34.26811-52.0506-41.29496-81.5452-6.82018-28.6249-6.09098-40.3599 4.10207-66.0148 3.63409-9.1465 3.59769-14.9773-.16427-26.4106-2.65559-8.07-6.10512-14.6727-7.66497-14.6727-8.65069 0-31.12514 55.2501-31.12514 76.5164 0 20.7572 13.83404 67.6132 27.24126 92.2661 18.52903 34.0713 37.94965 53.2642 62.75067 62.0157 30.01579 10.5917 45.39079 10.297 48.39889-.9273zm216.7465-6.0499c1.8014-5.4041-122.1273-176.1059-128.201-176.5866-1.0761-.086-15.618 7.3862-32.3149 16.6034l-30.3586 16.7576 16.6641 20.047c9.1651 11.0261 26.3482 31.6498 38.184 45.8311 11.8358 14.1807 28.1064 37.3301 36.1568 51.4432 8.0504 14.1127 20.9951 33.4187 28.7665 42.9022l14.1292 17.2434 27.919-15.4168c15.3552-8.4793 28.43-16.9503 29.0549-18.8245zm74.0234 147.3163c16.8196-9.666 36.7433-19.9374 44.2752-22.8244 7.5321-2.8876 14.9399-6.3016 16.4624-7.5865 1.5223-1.285-4.2254-24.3325-12.7727-51.2162-8.5472-26.8838-17.3501-55.5043-19.5611-63.6017-3.3097-12.1192-5.2022-14.1104-10.7035-11.2612-3.6756 1.9037-18.1276 7.4071-32.1154 12.2295-13.9879 4.8229-45.341 19.3058-69.6734 32.1847-40.7914 21.5899-44.1473 24.2251-43.0397 33.794.8139 7.0308 5.0976 12.3263 13.2806 16.4172 11.9059 5.9524 19.2297 3.3228 6.2212 18.4084-10.6961 12.404 3.4599 24.4615 18.7108 24.4615 7.951 0 16.0678-.3123 12.8254 5.7458-5.3076 9.9175-13.6534 23.8137-3.523 28.9753 17.3705 8.8506 47.0494 2.9877 79.6132-15.7264zm216.4338 23.4536c51.2105-11.8446 89.4325-23.0714 111.2281-32.6713 10.9157-4.8078 39.215-15.2943 62.8868-23.3027 75.691-25.6084 161.1709-75.2002 197.7248-114.7121 51.2485-55.3959 66.8374-75.9415 65.6158-86.4779-1.8244-15.7322-19.39-16.3656-29.0727-1.0482-10.5656 16.7137-54.5696 66.2406-76.1044 85.6559-18.5038 16.6825-105.4161 66.504-134.6873 77.2079-8.608 3.148-35.0186 12.9347-58.6904 21.7485-84.2426 31.3655-168.2534 54.6278-197.2883 54.6278-13.5132 0-24.6277-13.4873-38.6926-46.9524-13.1342-31.2515-35.7956-102.2421-35.8795-112.3999-.098-11.915 9.9571-17.6177 64.4911-36.5754 54.9412-19.0991 139.961-54.9265 190.9606-80.4702 54.0687-27.0808 90.6195-50.1798 132.1719-83.5285 20.63-16.5571 47.3929-36.9853 59.473-45.396 23.1302-16.1046 27.3744-21.5489 23.8857-30.6406-3.1563-8.2257-12.692-10.6448-22.3563-5.6716-9.9551 5.1228-62.4954 44.6978-90.6864 68.3074-53.2818 44.6233-166.6225 100.9548-298.589 148.402-60.4762 21.7437-90.724 40.8379-90.724 57.27 0 11.7504 24.6315 90.334 40.8943 130.4681 15.0623 37.1722 27.851 54.2725 47.1412 63.0358 13.1037 5.9528 25.7648 4.8118 76.2976-6.8766zm-62.9298 223.7813c18.7131-9.5466 23.6603-17.7168 16.6613-46.1869-9.7863-37.2763-31.6112-73.0038-54.2353-106.2823-17.8126-26.6249-33.364-49.3659-52.7774-72.0255-12.0813-14.1222-14.0636-18.1145-18.2733-15.1599-25.2387 12.8033-35.561 19.6628-53.7126 26.432 0 2.152 13.3168 21.2363 21.8266 33.0723 20.7169 28.814 72.0914 105.59 77.364 115.6159 2.3192 4.4092 5.4274 18.7194 6.9071 31.8004 2.9929 26.4541 4.2465 29.3451 15.4831 35.7172 11.5231 6.5345 23.872 5.6307 40.7565-2.9832zm-33.8873 349.087c9.6473-7.5323 20.4291-17.4789 34.8392-31.4654l33.8836-32.8873 4.7046 22.6629c16.6221 67.3024 52.0109 68.3304 105.8536 44.151 19.3815-8.9068 37.6552-22.9849 56.7291-43.145 63.94-67.5815 124.0581-135.0589 175.9933-197.5359 21.2819-25.6017 60.4467-100.6829 75.6997-145.1209 6.8044-19.8238 17.5976-46.5756 23.9847-59.4491 6.3872-12.8732 11.6128-24.6253 11.6128-26.1158 0-1.4903 8.7387-22.2776 19.4187-46.1934 30.066-67.3258 50.5278-121.6507 63.5379-168.6898 26.3019-95.0976 29.9262-111.6671 35.9444-164.3332 3.4428-30.1277 8.9811-72.3849 12.307-93.9047 15.6166-101.0396 18.0708-121.3293 21.5327-178.0276 2.0365-33.3556 6.5936-84.8672 10.1272-114.4697 6.656-55.7642 6.4721-77.229-2.1406-250.24383-2.1117-42.4217-5.576-83.7984-7.6982-91.9483-2.1223-8.1498-5.0286-38.5874-6.458-67.6392-2.3956-48.68614-1.9183-54.62265 6.0976-75.83122 16.4048-43.40229 46.7982-67.38281 99.7002-78.66381 39.0963-8.3369 62.567-18.36794 68.3766-29.22292 8.6466-16.15666-6.8956-92.31386-25.2221-123.58499-11.6118-19.81473-76.9293-82.34637-108.7704-104.13188-40.4373-27.66702-150.2056-79.05608-188.7452-88.36321-83.2297-20.09908-161.4502-24.95761-266.4373-16.5491-57.3569 4.5937-174.0577 26.82338-205.4947 39.14347-33.4828 13.1216-147.0347 73.20831-183.4082 97.05162-34.9052 22.88045-93.9046 78.71383-93.9046 88.86529 0 3.2646 2.8597 10.30032 6.3554 15.63488l6.3554 9.69958 30.5197-32.62045c44.0013-47.02986 100.4333-83.58486 209.1381-135.47341 44.1152-21.05784 58.1352-25.2322 131.3195-39.09894 130.8639-24.79573 290.9009-22.20673 377.1942 6.10215 34.868 11.43859 151.9917 72.23567 176.2077 91.46644 12.912 10.2539 38.5875 34.32041 57.057 53.48112 30.4454 31.58495 34.2263 37.22168 40.4911 60.36712 3.801 14.04096 7.1771 34.8672 7.5027 46.28044 2.171 20.1294 1.1681 20.57649-17.015 26.09348-9.684 2.93827-28.0968 7.2728-40.9171 9.63226-30.5268 5.61789-42.1753 12.01073-70.0322 38.43447-15.9603 15.13949-26.753 29.84199-34.7823 47.38308-10.9301 23.87843-11.6054 28.18212-11.0513 70.42848.3247 24.74777 2.3922 60.84231 4.5943 80.21015 2.202 19.3679 5.5258 61.6249 7.3863 93.9047 1.8602 32.2797 5.315 83.34043 7.6775 113.46813 3.9581 50.4777.038 157.0407-6.162 167.0553-1.0358 1.676-3.5145 33.442-5.5076 70.591-1.9935 37.1491-6.2963 85.1509-9.5615 106.6707-11.4856 75.6992-17.8696 121.913-25.6282 185.5252-4.3085 35.3278-10.3901 73.1829-13.514 84.1229-3.1242 10.9402-11.8949 42.4354-19.491 69.9891-7.5957 27.5539-15.467 53.1924-17.4905 56.9742-2.024 3.7821-10.6802 25.2558-19.2361 47.7193-8.5554 22.4639-27.3684 67.254-41.8063 99.5338-14.4383 32.2795-32.1587 75.417-39.3793 95.8607-18.8506 53.3715-49.796 110.6184-79.3149 146.7262-42.2474 51.6759-126.3146 146.4015-162.6437 183.2623-23.47 23.3141-48.1341 45.7483-80.3717 51.6307-26.2017 4.5274-34.842-13.3028-38.8969-55.0658-.1539-18.1115 1.7819-36.1351 5.7528-44.0941 4.64-9.3019 5.0716-14.0862 1.8185-20.1649-7.5256-14.0615-17.9765-9.3352-36.4483 16.4852-10.9955 15.3701-32.5848 39.6214-53.0876 60.5371-23.1846 23.5706-59.6031 56.1783-91.7003 59.0789-10.0656.5992-17.4173-5.1184-19.7244-23.4075-4.2801-35.6408-2.8809-51.2327 7.1398-79.5796 11.2797-31.908 11.8857-38.4331 4.1659-44.8401-10.7231-8.8996-19.5841-.5225-34.8868 32.9812-12.8523 28.1387-18.3363 35.5541-36.3558 49.1594-18.8788 14.2534-42.5776 28.2215-62.831 37.6645-31.5546 14.7414-52.8394 19.0668-55.3262-18.3203-1.9671-27.2707 1.7696-56.8708 11.6446-93.8153 17.1564-64.1857 17.6866-69.109 7.7831-72.2521-11.2514-3.5711-13.5292-1.5861-35.4369 30.8795-14.5833 23.6847-34.4506 45.0548-57.9458 58.0652-21.1803 12.5031-45.4829 15.9064-53.0527-9.0474-5.6544-19.4795-2.8216-47.6083 1.3916-62.034 4.7188-15.7483 14.8358-39.2612 35.3342-87.1893 10.7789-25.2024 12.0367-31.0572 7.7749-36.1924-8.2788-9.9757-15.2978-7.2952-40.4148 15.4345-25.2417 22.8426-43.90327 30.6041-68.63535 28.5466-14.6179 1.7454-17.55677-17.8684-16.98294-39.4038.24547-43.2117 12.48821-89.9032 21.95242-118.3025 10.05278-30.1276 27.71247-76.7994 39.24427-103.7145 11.5319-26.9153 27.0391-70.0524 34.4607-95.8609 26.2514-91.2917 38.0122-137.0451 38.0001-147.832 0-11.6243-13.7093-41.9054-18.9539-41.9054-1.7224 0-5.1894 13.2366-7.7045 29.4145-2.5151 16.1782-8.9702 44.7898-14.3444 63.5813-5.3745 18.7918-15.2544 54.4149-21.9553 79.1628-6.7009 24.7478-22.67596 70.1932-35.49976 100.99-40.12116 96.3499-58.00179 155.1523-61.80646 203.2582-5.06744 64.0658 2.80146 95.4267 25.36362 101.0898 11.54403 2.8972 40.76875-.9853 61.8057-8.211 13.5484-4.6535 14.7051-4.5269 12.3176 1.3504-6.3772 15.6987-10.8833 27.2512-14.0555 36.9119-8.98333 32.4607-9.03625 58.5113-4.58079 90.4113 9.01529 30.9143 21.99629 49.2677 72.52079 34.7087 12.8189-4.2141 25.7639-10.2455 36.9036-17.7435l18.8858-12.7114-1.3678 47.5217c-.5682 32.1129-3.5515 77.0493 32.9198 85.4313 15.5331 3.319 32.8494-3.3194 50.0724-9.9665 19.5235-7.5989 40.4716-19.1312 63.8957-35.0942l28.5948-19.4865v13.5929c0 11.2022 2.05 24.6124 5.0934 36.1952 4.5282 27.8202 27.0275 32.8665 49.8736 29.7384 24.5479-3.5724 49.0055-17.26 67.3267-31.3686zm425.0969 52.6282c-14.7035-9.9082-19.8691-25.4689-14.1868-42.7323 4.5896-13.9432 13.4719-16.2545 34.2683-8.9169 24.1573 8.5231 31.17 16.0814 31.17 33.5958 0 26.1675-25.7515 35.2384-51.2515 18.0534zm57.0297 97.2764c18.3924-7.6846 53.1486-34.4787 64.3129-49.5793 5.0851-6.878 10.5968-18.4961 12.2484-25.8184 1.4404-6.387 1.0408-16.0667-.3651-24.3579-2.4571-18.0421-18.2427-23.9389-29.1529-33.5331-17.9757-15.8713-19.0539-17.7864-13.2859-23.5942 5.7768-5.8168 7.4936-5.4896 21.5199 4.1 8.3832 5.7319 25.4014 15.5797 37.8185 21.8847 17.9498 9.1137 24.1635 10.6131 30.3233 7.3164 16.7022-8.9385 7.9447-23.3388-23.5545-38.7325-9.6838-4.7321-21.7834-11.7589-26.8884-15.6153l-9.2807-7.0106 10.9139-10.1203 10.9145-10.1204 15.974 10.7488c8.7855 5.9116 26.5323 14.5539 39.4367 19.205 22.8463 8.2347 23.6539 8.266 30.7163 1.2036 11.1504-11.1503 2.798-21.9217-24.8021-31.9851-30.897-11.2658-35.187-16.6111-23.4004-29.1574 4.8502-5.1629 10.2232-8.5477 14.0917-9.4852 8.7294 3.4374 16.4114 11.4355 25.1911 15.5922 22.3571 10.4714 32.9944 7.7959 32.9944-8.2991 0-6.9005-4.3571-11.6823-17.0002-18.6565-16.9634-9.3579-16.9834-9.395-9.2261-17.1528 7.7578-7.7577 7.8461-7.7469 40.4767 4.8525 28.4031 10.9674 36.045 12.3667 58.1347 10.6438 44.7603-3.49 70.2572-17.1923 60.5699-32.5502-2.1722-3.4438-26.0766-17.8402-53.1203-31.9925l-49.1707-25.7315-6.5464-31.5885c-3.6009-17.3739-6.5385-39.6002-6.5287-49.3916.038-19.7015-4.9645-27.1934-18.092-27.1934-22.6952 0-37.3271 39.0267-39.2345 104.6475-1.1029 37.9442-2.7718 49.5238-8.0206 55.654-6.1505 7.1829-7.1355 7.2817-13.671 1.367-3.8736-3.5058-7.0428-9.5031-7.0428-13.3287 0-8.7819-14.1855-13.5694-21.7076-7.3268-7.5867 6.2959-7.2146 27.215.6843 38.4931 6.0502 8.6377 5.8636 9.5906-3.764 19.2184-9.8541 9.8539-10.3449 9.9357-18.005 3.0029-4.3314-3.92-11.5981-14.8175-16.1486-24.2171-6.8894-14.2313-10.1339-17.0899-19.3983-17.0899-20.5553 0-17.973 25.7154 5.3611 53.3864 5.7064 6.767 10.3749 13.2494 10.3749 14.4065 0 1.1566-5.0586 5.7054-11.242 10.1078l-11.2419 8.0051-14.1905-21.3725c-8.3567-12.587-14.1906-26.1668-14.1906-33.0338 0-16.4213-12.5417-22.8702-23.3865-12.0251-13.7199 13.7194-8.1721 36.3768 17.2143 70.2998 12.055 16.1089 12.4689 20.3231 2.6039 26.4839-6.4384 4.0207-9.9308 2.5157-25.055-10.7971-9.7637-8.5942-21.6388-15.4687-26.721-15.4687-13.2119 0-46.9843 24.621-61.502 44.8365-6.8605 9.5532-16.985 29.3436-22.4983 43.9786-8.5478 22.6898-9.6343 30.2615-7.3767 51.4053 2.3883 22.3676 4.2249 26.3275 18.7469 40.4205 24.8206 24.0876 39.5037 30.2723 72.3441 30.4712 16.2146.096 34.2468-2.2314 41.8452-5.406zM738.55321 2317.0573c-12.9373-5.2273-13.94914-14.6316-3.74245-34.7733 11.74861-23.1852 18.82707-29.1844 33.92805-28.7548 18.93946.5383 24.18118 7.4631 22.09383 29.1884-3.04486 31.6855-24.29775 45.6457-52.27943 34.3397zm283.29819 354.1554c4.1729-5.3056 8.7792-18.9509 10.2368-30.3237 1.4571-11.3725 5.3787-30.5646 8.7147-42.6479l6.0658-21.9705 26.2527-2.4398c31.89-2.964 61.1515-11.3769 71.1993-20.47 8.6888-7.8629 9.7661-22.2219 2.1422-28.549-9.8843-8.2035-66.6931-20.1527-111.0557-23.3602-38.20965-2.7629-45.40949-4.4014-53.74672-12.234-4.56656-4.2901-7.00681-7.7483-7.3326-10.3181-.45149-3.5596 3.15389-5.4142 10.78325-5.4142 13.50391 0 23.63427-12.9162 18.15687-23.1504-5.85143-10.9336-28.13813-10.8519-45.96907.1696l-13.46046 8.319-13.41188-12.9994c-7.37652-7.1495-13.41188-14.2011-13.41188-15.6695 0-1.4689 5.72223-4.9522 12.7162-7.7415 31.4886-12.5558 43.18798-30.5306 28.04933-43.0946-5.10927-4.24-7.63946-4.2271-14.52939.075-13.85518 8.6524-51.24416 27.5769-54.48429 27.5769-4.02881 0-34.355-27.5036-34.355-31.1579 0-7.179 17.62667-21.8284 40.0386-33.276 19.37844-9.898 24.52091-14.4172 24.52091-21.5495 0-21.6178-29.9212-17.5032-64.84667 8.9181-9.09192 6.8783-18.65776 14.0991-21.25657 16.0453-5.60294 4.1974-25.09747-8.5959-25.28571-16.5934-.0658-2.8758 9.56105-14.5336 21.39704-25.9061 11.86949-11.4045 21.51967-24.1496 21.51967-28.4204 0-13.7878-22.35357-39.186-47.41832-53.8758-31.58721-18.5128-58.76595-24.1001-88.34036-18.1607-27.73861 5.5705-43.43763 16.1214-59.91311 40.265-20.55337 34.9169-11.99809 74.4696 5.40894 105.6355 23.01525 40.8371 51.5783 65.3624 70.36897 60.422 4.61033-1.2125 17.85675-13.6809 29.43668-27.7073 11.58042-14.0273 23.1581-25.5037 25.72869-25.5037 2.57075 0 8.592 4.1706 13.38031 9.2677l8.70647 9.2676-7.5072 17.143c-10.21679 23.3323-20.27952 55.6446-20.27952 65.1206 0 9.8279 9.74415 18.1854 17.66067 15.1476 6.84839-2.6279 21.11146-33.3629 24.27128-52.3012 3.46974-20.7958 9.15925-21.6564 27.85726-4.2152l16.90871 15.7719-12.26358 15.2608c-15.38909 19.1494-24.36781 40.2985-22.81229 53.7334.99663 8.6076 3.16238 10.3564 12.82589 10.3564 10.1214 0 12.42871-2.1707 17.82033-16.7672 3.40642-9.2213 11.8222-22.3951 18.70187-29.2748l12.50777-12.5078 14.28569 14.2855 14.28551 14.2856-6.57871 13.8635c-6.99943 14.7503-9.40616 37.3525-4.77514 44.8456 6.02525 9.7491 19.70489 3.2304 26.18917-8.6158 4.64495-7.5479 6.67603-24.2833 10.36205-29.5367 3.24975-1.4903 6.67026 4.0539 10.32919 7.0904 5.34031 4.4321 6.14918 8.5626 15.78463 80.5854 6.30085 47.0972 13.52025 80.4184 18.86105 87.0574 6.43089 7.9935 21.42937 5.5807 29.55967-4.7547zm257.188-52.7634c-7.9936-15.4579-7.4991-26.983 1.8127-42.2558 9.0453-14.8356 22.4761-16.852 33.2141-4.9868 5.3565 5.9187 6.5236 11.9137 4.982 25.5912-3.6028 31.9628-27.8823 45.1023-40.0088 21.6514zm162.5332 128.7866c10.7075-5.7303 9.507-13.1488-6.2614-38.6955-7.6063-12.3234-14.898-28.9888-16.2037-37.0345l-2.3737-14.6281 16.6974 1.2302c15.4766 1.1402 17.1622 2.3941 23.0508 17.148 8.6568 21.6897 30.7803 55.2439 38.3357 58.143 7.3152 2.807 16.9264-4.1651 16.9264-12.2794 0-3.1529-6.3652-17.1136-14.1445-31.0246-7.7791-13.9106-13.5015-25.917-12.7162-26.6803.7853-.7637 9.5489-2.5967 19.4747-4.0738l18.0461-2.6862 12.5007 26.7133c6.8753 14.6919 15.3139 29.8216 18.7524 33.6215 14.1792 15.6678 33.0927 1.5427 22.516-16.8158-12.3008-21.3515-20.3344-41.0024-17.8685-43.7093 1.4395-1.5805 14.0016-4.4909 27.9152-6.4678 19.3277-2.7458 27.2355-2.3686 33.5091 1.5975 14.179 8.965 84.5629 28.9348 111.2491 31.5642 21.0331 2.0722 26.5015 1.3784 30.8986-3.9198 7.6042-9.1627 1.1061-21.2761-21.3873-39.8688-10.1445-8.3853-25.3198-21.8345-33.7231-29.887l-15.279-14.6415.5114-38.1798c.5462-40.7912-4.0693-57.8946-16.7067-61.9054-16.3141-5.1778-24.3297 6.9559-42.4478 64.2555l-17.4139 55.0721-18.7777 4.0423c-29.4719 6.3435-35.0519 5.5565-31.8623-4.4927 1.4899-4.6942 6.0038-13.9376 10.031-20.5417 14.2489-23.3666 6.2189-51.2162-11.9622-41.4861-4.4413 2.3773-8.0754 6.1295-8.0754 8.3391 0 2.2094-4.4785 14.0324-9.952 26.273-19.7998 44.2781-17.2512 41.6939-42.4168 43.0044-17.499.9111-22.2777 0-20.6656-3.9128 1.1535-2.8038 4.3102-11.8972 7.0147-20.2084 2.7045-8.3105 9.8618-18.7655 15.905-23.2336 22.7633-16.8294 8.0613-40.5194-16.0475-25.8583-9.3392 5.6797-16.8257 16.4867-28.1276 40.6046l-15.4014 32.8656-14.6046-2.2531c-8.0328-1.239-15.2259-2.7719-15.9846-3.4054-3.1559-2.6347 18.7496-44.15 30.1423-57.1253 13.2092-15.0451 15.0819-22.3676 7.6254-29.8244-8.0668-8.0666-17.5233-5.2042-30.0897 9.1083-14.1651 16.1328-24.958 36.2747-31.9143 59.5596-4.8548 16.2507-5.3546 16.6288-21.9754 16.6288h-17.0068l.565-44.9157c.6178-49.1038-2.0615-56.8646-19.5909-56.7423-14.833.1028-71.9665 24.5266-93.5559 39.9933-20.9444 15.004-27.6785 29.5107-28.0157 60.3479-.2037 18.6628 1.5193 22.5404 22.6055 50.8649 38.1593 51.2577 69.6702 74.7097 95.4647 71.0482 6.797-.9642 10.3482-5.834 15.1867-20.8226 6.3097-15.6957 3.5808-33.2029 5.2908-47.2484l2.6515-21.2237h17.3255c15.6276 0 17.3258.9106 17.3258 9.29 0 17.396 19.2366 58.4902 34.0092 77.9298 7.4942 10.0538 11.6991 11.5126 21.0255 6.547z"
				/>
			</svg>
		</>
	);
};

export default ReaperCat;
