const RadCat = ({ id, name, className }) => {
	return (
		<>
			<svg
				name={name}
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 3000 3000"
			>
				<path
					fill="#324fff"
					d="M1862.26563938 250.00000042c-29.39717309.02697062-39.65599655 22.68208888-42.43666714 49.65230602-.78024995 44.33160269 2.01470507 91.03801812 2.28171418 131.6126139.5138402 81.82815186-.97194112 163.71064452 2.03837927 245.43510934-.22535448 32.15426935 3.70106785 61.60488421 37.78643336 68.1777234 49.9140209.30816426 115.44792461-3.24935997 159.5542727-17.98111038 61.52716888-20.84688824 115.02288767-65.34331137 140.11385218-126.25584986 20.21647505-53.35447267 18.52941303-112.82787903 2.67548518-167.69070841-10.5097501-41.67869292-32.30070981-75.00328725-61.22270059-102.01465956-34.5132993-31.98864978-76.9197993-55.63528782-122.41063904-67.77236501-40.40987523-7.81698375-79.23977179-12.99803922-118.3801301-13.16305944zm-339.406202 5.79109087c-28.22974495-.2693066-61.80204942 6.54257216-103.16709404 11.70944308-52.89810985 4.34926167-54.65392697 16.25888666-64.68571778 64.7725332-8.07767972 52.03311223-28.22394127 123.96124972-39.77856302 171.32744635-15.9974415 65.5817516-31.90380222 131.27288402-42.44241088 197.87352557-5.03623324 31.15845425-13.42690198 60.1068163 19.8632199 75.11546504 17.95947396 7.78971345 41.70821076 6.1811659 64.99844708 2.8201276 31.64566346-4.34406734 67.86657239-5.78270001 84.39837172-33.51838321 18.45999865-31.77897822 14.82582792-82.06609264 30.80248207-115.35142974 21.4572333-6.45306967 53.58136548-8.26939087 74.36252533-3.260348 15.1499548 31.06885187 30.27708446 64.20954655 52.19451639 91.31281874 20.21287896 24.02522558 22.86309167 26.84525329 50.8973496 28.14443788 34.07497682 1.57678217 73.93824755 3.02860048 101.62088854-13.20351535 24.35866232-15.19984045 23.2012233-25.7383592 17.27458012-50.15026352-9.5036462-38.66337796-30.7040493-74.9154829-45.18157668-111.87102148-43.05669165-84.41852976-71.53906137-194.53406377-122.20795985-274.80730963-21.82465301-31.20170713-46.95532426-40.608359-78.9490585-40.91352653zm-484.0369732 11.4546207c-57.19763572 5.98048452-116.98111427 16.97900213-168.43772458 43.8380404-42.68274904 22.51686887-46.63883905 28.96494398-46.85516338 74.52470863-.06612795 40.97865558 8.2731268 83.20674994 8.91236038 123.9162987 7.96254516 79.50578198 13.40730334 159.87282565 27.4668461 238.57857922 6.7588765 32.32388456 1.65286926 49.10670043 36.04334237 57.0069135 26.2987287 5.8430143 57.38116577-.9921491 85.97930936-8.64600057 31.74794202-7.77063424 46.12435955-9.72740242 44.30135564-45.23951355-1.84430072-31.08533391-17.61547872-68.24854624-5.9995138-82.1457059 26.7830011 23.91214877 47.23320152 56.08789472 73.70236454 80.28683106 24.2871802 22.11121081 33.08879124 23.9469109 60.80577481 8.28117802 20.90265748-11.98164653 39.68747226-31.22488188 55.87758385-50.3992922 22.27815894-25.17637147 22.6635191-27.18088764 5.13663387-54.85843418-15.71641766-24.60809057-38.27521086-46.19717023-55.15371248-69.93241174l-40.28236415-49.82012318c35.47944672-38.84657838 66.8998356-89.47052584 53.86232938-144.31237807-3.33287897-68.58448026-70.78589191-117.83742136-135.35942192-121.07869014zm-31.58424038 118.86070653c26.02592591-.46259602 39.96704768 17.15451092 39.0952175 53.64235903 2.08611727 14.60279091-25.39964821 27.9224797-46.79728643 35.9911892-29.08292545 10.87704994-23.57027124 13.3942076-30.44920694-22.22598578l-5.90682478-28.94356726c-5.85068594-28.6682672-8.03304835-23.74722845 19.41150203-33.83693616 9.12154248-2.94708928 17.35932778-4.49750018 24.64659862-4.62705903zm478.18225166 18.04484095c7.10696728.39676774 18.61439045 21.75739628 24.47866159 44.2781609 10.76035706 25.92265842 12.42994812 34.19814265-10.27326774 36.69192578l-14.71498867.97873372c-24.6390069 1.64261044-13.65417438-2.30129285-11.6052366-25.7236752l6.09794655-41.9097412c.46622207-10.34512944 2.78645428-14.49570757 6.01688487-14.315404zm481.76695628 1.12347602c2.24904976.10908116 5.15408486.79053874 8.90070308 2.13107829 10.19978778 3.25045877 24.4109054 11.63642263 39.9406864 32.34296377 28.54170507 40.12998017 23.91604453 123.09249619-35.65525519 141.7816352-26.05321617 8.01177153-24.61618176 6.07608038-23.1004331-21.64691664l2.49018705-131.95424171c.24423392-12.94639548-2.32187042-23.1277034 7.42411176-22.6545189zm-59.05630078 414.83462609c-.63121232-.00499456-1.25573194.00998911-1.8729595.04095538-2.82172585.14201528-5.49801015.65320836-8.02635563 1.54519657-24.23819357 8.55098409-89.77329598 136.02241961-89.77329598 174.61640318 0 13.06178976-6.81647376 17.78880988-25.75713874 17.86530654-9.27489542.0373593-33.5412583 2.46639298-53.9256504 5.39255505-36.76544568 5.27765024-187.21933285 36.11796109-198.7151087 40.73293328-4.38232566 1.75928334-14.1219148-7.05681192-36.3081439-32.84699466-34.01024734-39.53492845-66.33499097-63.3918474-106.4679479-78.58820164-34.22386461-12.95888187-50.07917096-10.74915927-64.68149238 19.33440602-31.84950138 66.45184367-30.3543303 96.99515808-39.24435501 181.1912302-2.48239554 75.69023884 4.15018855 150.14832007 18.75106155 210.54412152l8.54732806 35.37156425-27.6281004 19.29537854c-36.01865928 25.14830205-86.12223366 74.95224286-116.15666248 115.46600492-28.97962798 39.09101207-64.75134628 106.50247028-84.71824323 159.66005745-25.66368056 68.32406396-49.5009609 177.2284175-52.8877012 241.6117747l-.97354936 18.46228615-15.63530603-14.15837508c-8.60081979-7.78711628-20.06439074-23.50539192-25.47030124-34.93264243-8.31586023-17.57814939-9.54049605-24.23409803-7.9561721-43.2224111 3.46581415-41.53874538 14.54553329-66.8830339 69.75212815-159.57225312 33.46179486-56.18079352 47.76655047-110.16687807 47.84631357-180.5532952.03586093-31.70575798-11.28597443-89.92303284-23.9914424-123.35970507-15.9267585-42.00104173-31.83592616-78.81153833-62.4105165-100.91545709-28.9697887-20.28649876-56.08244067-29.88154538-85.2333121-23.17015714-29.65236506 7.1123514-56.407067 27.1506206-67.71333931 57.89402703-9.70977164 30.86986865-3.98003393 58.88085192 22.4462458 109.75153058 19.77134001 38.0598355 20.78925104 41.395901 22.64720688 74.12434481 1.53473797 27.03474684.42413792 39.74989426-5.25209807 60.21559778-10.6180621 38.28349183-25.31587947 70.76640314-45.67289141 100.94272738-41.17904726 61.04209734-60.33330954 117.1670517-64.45516896 188.8685361-2.73551977 47.5850582-1.85855518 52.27944388 21.65413878 116.02389712 13.93060323 37.76695458 20.26866819 49.33315372 45.88165397 83.76034682 3.73666907 5.02252818 7.4041635 9.66197371 11.06022038 14.13699837-46.5859167 6.22132214-87.63497558 25.1090448-120.18742113 55.5585714-39.79881097 37.22784192-54.25179508 67.97414519-60.0108009 127.65782247-5.41615933 57.41874482 12.42320547 106.87186784 50.13873607 152.77885422 24.53769727 29.65639068 53.74526692 55.72758726 90.38590857 74.18867473 30.8904762 15.1675756 72.80492226 28.41434383 147.12682185 48.53502324l45.02516708 12.18981974-10.2329916 13.02291211c-24.6824196 31.7531064-34.82881556 92.32062078-10.77732859 137.37573523 23.10402919 32.41688325 49.79613932 44.1560939 92.18667671 51.64493514 24.10178218 3.15676085 46.20942688.94806712 59.97762704-5.98957462 11.14515784-5.61588175 51.16174155-38.2625147 78.51017664-64.05321687 25.1074066-23.67740452 39.41112333-54.5174057 39.4140901-84.98361412v-23.5056916l130.64477831 1.506259c71.85500716.82879707 179.84675495.2975758 239.98074164-1.17651823 60.13398669-1.47499306 109.88288747-2.13906958 110.55535484-1.48278457.67246738.6563849-1.3444353 5.11822392-4.48731127 9.91499805-9.91180153 15.12731945-17.40963298 41.1843315-17.65067038 61.3491628-.71771808 60.08504002 43.55714642 102.82587578 111.32591536 107.47081532 36.8172892 2.5235507 57.06762735-4.37882946 102.408031-34.909168 56.69073795-38.17321199 81.25737369-72.0515031 79.17544186-112.6643572-1.05564991-18.32084025-7.83626274-36.06890452-16.82936515-52.41949128 33.98397596-8.1807874 67.67247384-18.14902744 102.48994176-29.60444727 62.59990018-21.50237412 114.45630493-41.57400696 158.44258383-100.46874376 14.28803382-19.76816347 26.0553139-41.69947028 34.94832535-64.38485556 12.72243947-32.85560528 21.4404416-74.59543159 14.62856283-113.85645844-7.93765228-64.66864638-34.0707814-100.21072486-96.47889053-131.2300307-60.33836403-24.83614213-134.86806722-21.72143547-206.87811547-8.98241406-16.7631373 4.5865032-36.17389015 8.33851555-43.13660459 8.33851555-1.51325138 0-2.97765597.10378693-4.40150475.27899605l.3473216-5.82565321c1.22576459-20.39298275 4.66731517-66.26121135 7.64986582-101.9338476 2.98255064-35.67273613 7.7823215-94.87963285 10.66607978-131.57155862 10.84178835-137.94811166 13.5459423-167.86122265 18.77454596-207.85165485 2.95318264-22.5866928 6.47214888-74.07759575 7.82347667-114.4261378l2.45632395-73.3594781 11.66299368-17.14741865c20.598359-30.28101019 38.89252832-66.04934218 53.22531338-103.57266218 10.33364196-4.26355505 20.25503304-10.61113964 33.06158088-20.12457517 61.78169159-45.89459987 76.86905458-90.9929672 62.48462577-186.77701473-4.97088444-33.10053844-18.20956149-65.60133026-31.069651-76.27430254-3.74651833-3.10931254-23.6027858-1.86057298-52.7315513 2.42126215-5.03641306-18.69593161-11.61254865-38.75472845-20.1480496-62.33448934-22.5652162-62.33734623-44.24150085-99.58390775-79.68458718-136.94064924-32.6313496-34.39307028-58.903727-51.76214744-78.4712091-51.9102461zm9.88183418 62.9997246 29.65708992 30.89603014c34.58402224 36.02644079 56.11576436 75.70226574 77.1132885 142.0873821 3.67799298 11.62833145 6.78460846 21.75320085 9.46818482 30.99353392-48.62062998 9.3791818-107.54073913 22.92552366-162.71133322 38.1049863-29.51624336 8.12105248-86.22046663 21.42545792-126.01121637 29.5634919-163.77597335 33.4958078-259.60527158 56.60353296-296.36849967 71.46124614-20.49274407 8.28197715-20.58471387 8.39215712-19.44561487 22.87348036 2.25328515 28.64689048 20.4996865 92.84115368 33.58840692 118.17205679 22.04186637 42.65812586 68.37848468 80.71436528 110.24906854 90.54395637 41.41767727 9.723207 99.1554745.45700212 136.61086852-21.91951965 45.89150324-27.41643102 72.84064335-64.88710838 80.07096623-111.33760262 3.72664-23.94171657 3.25385507-83.86792962-.78624342-99.6004897-.99151978-3.86079383 5.79568586-7.10186283 24.57093106-11.73921064 37.91868927-9.3656965 41.2895169-9.03645518 43.95990763 4.31559835 3.77039233 18.85196162 27.96723095 70.55133744 42.8185511 91.4863297 15.24638973 21.49168576 29.3324436 33.3170026 57.7651674 48.50575513 16.69720914 8.91958251 22.19941473 9.87104594 55.5937331 9.59494673.26091574 0 .45909983-.01498367.71801775-.0179804-15.35676948 33.37174296-33.2445815 62.90037283-46.72249791 74.69212623-8.53350313 7.46586628-9.00838576 10.26471705-10.35401976 61.23408818-.77555506 29.37709496-2.99943225 70.92932565-4.94571186 92.33300729-1.9463795 21.40358175-6.0249361 69.76938935-9.06242689 107.48050476-3.03749079 37.7112153-6.40592103 75.23783172-7.48794222 83.3915486-1.0819213 8.15381679-4.39361335 46.51272646-7.35528674 85.2431314-2.96167339 38.73030505-7.81768298 98.77139295-10.79294157 133.42493945-2.97525859 34.6534466-6.55425943 85.27959167-7.9522364 112.50243359-2.68217788 52.22560252-11.60975168 42.9169439 27.32762777 78.18631947 40.21988222 38.63101323 44.71228795 56.57226703 15.1494953 60.53754703-20.28669854 2.72103556-46.04673413-9.66397153-59.03917944-28.39286723-5.06158562-7.29645084-17.36468195-22.52705777-27.3452086-33.8420306-15.96220989-18.0962849-20.52913442-19.37379312-17.25070613-44.33649736l3.40449096-90.09714316c2.36732091-62.62307494 5.29932662-129.70299435 6.51440285-149.07199268 1.94018625-30.92530825 1.36741027-36.2140464-4.69029014-43.3922261-10.73620338-12.72223968-24.46394761-14.2962249-36.01346493-4.1283024-15.23590116 13.4135865-10.28179843 23.60238625-11.23575913 44.36966123l-4.84042657 119.34268144-4.88148185 120.40002951c-.76556595 18.87084106-4.57441637 35.00766071 7.19146522 50.9211237 4.73214454 8.92018186 16.9566265 24.9325371 27.16570417 35.5803368 19.92699043 20.78345735 28.68944413 37.31105127 28.68944413 54.12273568 0 18.04524052-7.63438268 24.1902458-32.26175226 25.97170498-25.59821188 1.85158279-35.85793437-2.3300615-68.62443672-27.99300286-42.95670058-33.64394642-48.91161297-62.61838006-54.44068928-264.89301082-1.4679008-53.70479102-2.42945322-85.03006352-5.04919913-103.29955972-4.4552462-31.02849583-42.3510604-30.3532315-47.99650993-.15802783-1.3749021 18.07990275-.4900661 49.0436691 1.06523947 102.0685009 1.7868533 60.91823229 4.98416997 130.80579289 7.1113525 155.30340383 2.12718253 24.49761094 3.3111926 45.10286243 2.62414111 45.78991392-.68705148.68715138-16.97850267-3.56711379-36.19496719-9.45250192-38.55139996-11.80723654-55.45848044-15.73805409-106.28260981-24.70948012l-34.28305014-6.0520066v-75.00029052c0-85.26760472-4.89641557-113.5432996-27.63391408-159.57614886-18.62336067-37.70362358-37.43218929-61.01452738-67.5475-83.7153958-57.668243-43.4701412-104.95596513-48.8783492-104.95596513-12.0045216 0 13.6781982 7.54436076 20.617638 30.8082358 28.34601827 36.18191141 12.01990485 76.14505334 49.58957436 95.03708132 89.34995719 19.93559105 41.95678994 23.1737732 62.81296806 23.74171445 152.87255214.64210046 101.81847329-.50311188 99.23169147 49.01691825 110.90847014 18.17020436 4.2844323 47.2952739 10.37869287 64.7204899 13.53994883 47.54010716 8.6243042 117.97577063 31.63223808 128.22939975 41.8859671 6.2038412 6.20384118 8.72099886 12.92931408 8.72099886 23.3086063 0 13.57560998-1.0366706 15.0068507-14.89976736 20.55370765-13.4667286 5.38832965-61.69748333 8.0189637-72.19674485 3.93721058-5.3686511-2.08722606-148.82281415-26.7104002-194.5790248-33.39721521-176.55240398-25.80139053-248.2767435-37.69723054-267.72394663-44.41651019-29.85816086-10.31636078-44.70776288-33.7300526-49.25883469-77.67507645-2.91353583-28.13325007-9.19693035-44.10355114-19.53340922-49.6354244-3.62085523-1.93788876-19.86261056-6.0963583-36.09543562-9.24193133-40.29689832-7.80869278-51.42214785-11.41126793-71.4670698-23.1582701-74.06475973-43.40491227-127.95364019-149.6602518-120.9853718-238.55460534 3.8874448-49.59217153 27.8907143-112.72718873 59.18941575-155.66441053 18.45946923-25.32361105 33.6478122-57.57787146 44.49254735-94.50833736 19.24320538-65.53030764 16.23284503-121.36687618-9.23603775-171.27630207-34.07791363-66.77994621-36.50403048-78.60656164-19.90409537-97.18512112 14.03466985-15.70758729 31.02853579-17.44489457 56.25902828-5.75542972 21.73042567 10.06783155 30.52308646 22.36982906 47.96727179 67.11238404 20.83840748 53.44847026 27.84573331 93.16090532 25.42347226 144.0969128-2.85328148 59.99983285-18.25036704 104.42673172-54.9518524 158.5538626-21.49364363 31.69856583-46.4059328 85.78823753-54.84649718 119.08116636-14.29372761 56.38007641-7.42557017 93.39385155 25.36494602 136.6734004 26.68198117 35.2170326 48.254369 47.37818357 93.61285295 52.77840027 25.43585876 3.0283008 24.20650809 5.92614373 29.15184037-68.66349417 9.11578875-137.49290758 51.35750827-266.51504369 120.0996168-366.832752 25.23046252-36.81968658 82.26075056-93.94025625 119.34654723-119.5377689 35.44317623-24.46364794 51.20946955-41.60767029 48.39064054-52.61837462-1.08261054-4.2289927-6.27679171-19.79683223-11.53626175-34.60100374-16.38310134-46.11466012-21.93834915-93.32183-22.13993952-188.04513317-.258838-62.60968952 1.23120865-106.3019887 27.69442815-171.49090827l3.53716641-8.41856834 22.12237865 11.16948135c28.99077584 14.63448637 42.12309876 26.56360013 80.17047782 72.82299258 34.85258965 42.37513417 37.63216143 43.72446413 68.11914722 32.96798284 19.5175365-6.88619779 166.64534729-37.41333982 204.00624425-42.32688673 15.28834402-2.01070942 42.39091697-4.73194476 60.22738493-6.04621292 43.90167108-3.23467596 45.86583122-5.15218692 56.90280692-55.62296125 8.79132225-40.20178195 35.27157319-103.01523947 52.01952703-123.39486677l7.11724608-8.65657904zm-830.24783183 1692.80223708c.75739485 0 1.51454996.00998912 2.27096588.03695973 36.30805399 1.32505641 71.1013882 37.64608626 64.57613717 81.15968013-2.11948092 14.13370196-5.12346821 18.72250267-19.6192557 30.0160988-12.22951648 9.44970496-22.80234785 12.52265712-34.06444829 11.83081085-24.3830957-1.81761978-51.5331769-12.35244256-62.39101776-37.2133577-10.13417926-24.91985093-5.1536753-58.1670296 16.15622851-74.42082181 10.2806397-7.84145709 21.71048739-11.36361985 33.07139019-11.4094699zm745.39297743 5.00434798c14.52427644.19298975 29.86116758 7.73796983 47.09329395 20.5654948 17.53679444 15.5602478 24.48372606 36.59023657 15.13191445 55.15860715-19.07901426 36.77253796-40.98464905 43.41510118-82.84134803 33.81865608-22.1328872-8.63429332-34.71867555-26.16809103-34.3922312-49.8188246.28818604-20.89084036 10.57467936-38.91580296 29.50495567-51.6916842 8.36728421-5.62177533 16.78890923-8.14812299 25.50341516-8.03224923z"
				/>
			</svg>
		</>
	);
};

export default RadCat;
