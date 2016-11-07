var position;
/*function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  days = days * 24;
  hours = hours + days;
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date("January 14, 2016 10:12:00")));

initializeClock('clockdiv', deadline);*/
function alphaSort() {
var items = $('.list').get();
items.sort(function(a,b){
  var keyA = $(a).text();
  var keyB = $(b).text();

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
var ul = $('.alphaList');
$.each(items, function(i, li){
  ul.append(li);
});	
}
function getName() {
	var path = window.location.pathname.split('/');
	var name = path[path.length-2];
	if (name =="test") {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 100) {
				$('.main_h').addClass('sticky');
			} 
			else {
				$('.main_h').removeClass('sticky');
			}
		});
	}
	else {
		$('.main_h').addClass('sticky');
	}
}
$('.mobile-toggle').click(function() {
	if ($('.main_h').hasClass('open-nav')) {
		$('.main_h').removeClass('open-nav');
	} else {
		$('.main_h').addClass('open-nav');
	}
});
$('.main_h li a').click(function() {
	if ($('.main_h').hasClass('open-nav')) {
		$('.navigation').removeClass('open-nav');
		$('.main_h').removeClass('open-nav');
	}
});
function loadInfo(kidNumber) {
	var information = {
		"list": [
			{"name" : "WILLIAM CHAVEZ", "bio" : "<p>Until he was almost 2, William was always sick. Born in March 2004, William suffered chronic respiratory infections, unexplained fevers, reflux and failure to thrive. He looked thin and wan.</p><p>In December 2004, Sarah Chesrown, MD, PhD, a pediatric pulmonologist at Shands Children’s Hospital, diagnosed William with asthma and treated his symptoms aggressively. William’s respiratory health improved, but he still tired easily, became short of breath during activity, and he ate poorly.</p><p>Three months later, (Tallahassee) physicians found that William had a congenital heart defect called partial anomalous pulmonary venous return (two of his pulmonary veins are attached to the wrong place on his heart).</p><p>In June 2005, Dr. Jay Fricker, MD, chief of pediatric cardiology at UF College of Medicine, and Dr. Joe Paollilo, an interventional cardiologist at Shands, confirmed William’s diagnosis and determined that his heart defect would require open-heart surgery to correct it.</p><p>In June 2006, Mark Bleiweis, MD, pediatric cardiovascular surgeon and director of the Congenital Heart Center at the University of Florida, successfully repaired William’s heart. William has had a phenomenal recovery, and he continues to do well.</p><p>“From our surgical consultation with Dr. Bleiweis, to surgery, to our post-op appointments with Dr. Bleiweis and Dr. Fricker, our family received extraordinary care. The team of cardiology physicians and nurses were compassionate and supportive. William continues to see the pediatric pulmonologists at Shands every six months, and will see his cardiologist every year.” Says William’s mother Karen. “Despite his ordeals, William is a bubbly, exuberant, happy, intelligent, 3-year-old bundle of joy and energy. We are blessed to have had the excellent care and treatment at Shands that William needs to lead a healthy, happy life.”</p><p>The Cardiology/cardiovascular care provided at Shands Children’s Hospital at the University of Florida is one of seven pediatric programs in the state.  More than 5,400 patients are seen each year with approximately 5,500 echo-cardiograms performed. The Congenital Heart Center at UF will be doing approximately 250 cases per year with an additional 240 catherization procedures performed annually. This is an average of 5 cases per week and 20 catherizations each month.</p>", "imageURL" : "../images/williamchavez.jpg" },
			{"name" : "Carson Chapman", "bio" : "<p>In January of 2007, Carson was an active, funny and some might say very mischievous, four year old. So when he came to me in the kitchen one afternoon and said he broke his arm, I brushed him off and said oh you would be in a lot more pain if you really broke your arm. And also being that I am a nurse I don’t tend to get overly excited unless a bone is hanging out or someone is gushing blood. But over the next few days Carson continued to complain of arm pain. So I decided I should probably take him seriously and get his arm checked out. Through numerous appointments and x-rays the doctors thought something looked weird around his elbow and it could possibly be a hairline fracture so they decided to put his arm in a cast for two weeks.</p><p>Over the two weeks while in the cast, his arm pain did not go away. His health in general seemed to also make a slow decline.  He was not eating, he looked pale, his energy level decreased, and he began having a fever for no apparent reason. My mommy radar was on high alert and I just felt in my gut that something was not right. I went ahead and scheduled an appointment with our pediatrician to check out the other symptoms on the same day Carson was scheduled to get his cast off.</p> <p>On that morning we arrive at Tallahassee Orthopedic Clinic and they remove the cast and re-x-ray Carson’s arm. At this clinic they have a large room that is usually filled with several patients, doctors, and other staff. In general I would say it is a crazy busy room with lots of action going on at one time. So when I notice our doctor and several other doctors gathered around looking at my son’s x-ray, I began to get concerned. Our Doctor came over and asked me a series of questions and then let me know that there had been some significant changes from the last x-ray. And then he said something that will stick in my head forever &ldquo;I am sorry to tell you that we were either dealing with a serious bone infection or some type of cancer.&rdquo; He then said &ldquo;let’s hope for a bone infection.&rdquo; It was a surreal moment where time kind of stands still.</p><p>Fast forward several hours and we are in a hospital room here in Tallahassee waiting on the results of a battery of test. My husband and our parents had all joined us by this time and everyone was anxiously waiting and as crazy as this sounds hoping for a bone infection. Then Carson’s pediatrician walks in (he was also my pediatrician growing up) so I knew him pretty well. When I looked up and saw the tears in his eyes and the resident standing beside him holding a box of tissues, I knew the news was not what we were hoping for. He asked us to walk with him into a private room across the hall. And then I heard the second statement that day that will also stick in my head forever &ldquo;I am sorry to tell you it is definitely cancer but we are still not sure what kind, we have an ambulance waiting to take you and Carson to Shand’s Children’s Hospital in Gainesville&rdquo; I think I was in shock. I just kept thinking is this a dream, this can’t be happening to our son.</p> <p>Unfortunately it was not a dream and our son was officially diagnosed with Acute Lymphoblastic Leukemia the next day at Shand’s. This was a start of a journey for Carson and our family. A journey that resulted in 39 months, yes 3 years and 3 months of chemotherapy and treatment. When I left my house that day to take him to get the cast removed, I never thought I would not return home for over a month. And after that month of hospitalization we returned to Gainesville every week for a few days at a time for treatment. He endured countless hospitalizations, surgeries, chemotherapy infusions, spinal chemotherapy infusions where they inject chemotherapy into your spinal column and emergency procedures to deal with the numerous side effects he had from the chemotherapy. We had to keep him in constant isolation because the chemotherapy kills all of the good blood cells along with the cancer cells. He was at risk for infections that could kill him. I am not afraid to tell you it was a living hell; it was a parent’s and most importantly a child’s worst nightmare. At that point we felt like we were inducted into a club that we did not ask to join.</p><p>But as we begin to get a grip on our new reality, we began to be able to take in all that the hospital had to offer and the services provided to the families and children most of which were made possible by Children’s Miracle Network. From the endless array of Sponge Bob movies that could be checked out to watch, to the really cool portable video stations, to a shower and laundry room for parents, or tickets to a local sporting event or museums. These little things made long and stressful hospitalizations more bearable.</p><p>It has been a long journey and an emotional roller coaster ride. But I am happy to say that as of March 22, 2015 Carson has officially been off chemotherapy for five years. In the cancer world the five year mark is a big victory. He is a healthy 13 year old who has a bright future ahead of him and I know in 5 short years he will be at Dance Marathon having the time of his life and raising money for Children’s Miracle Network.</p> ", "imageURL" : "../images/carsonchapman.jpg" },
			{"name" : "JAKE CRUMPACKER", "bio" : "<p>Jake’s leg was in pain for months leading up to February 2011. At night, his dad would rub his leg and give him ibuprofen. The next day, Jake would play two soccer games followed by baseball practice and finish the evening training for track. Still the leg pain made him mom, Barbara, wonder in her son had cancer. She had worked in a cancer unit and knew the signs. But since he would play, run and simply not slow down, Barbara and Jake’s dad, Jon, just attributed it to a strained tendon or muscle. On February 28th, their world would drastically change. That’s when local physicians found a growth on Jake’s fibula that needed to be evaluated immediately by experts.</p><p>After researching physicians who would be best for Jake, they learned that Shands was the right place. C. Parker Gibbs, MD, Associate Professor, Department of Orthopedics and Rehabilitation, made sure that Jake had an MRI, a bone scan, and a CT of his lungs. Thankfully, there was no sign of additional cancer in the scans. The next day, the medical staff performed a biopsy on Jake’s leg. The diagnosis was cancer, Ewing’s Sarcoma. Gibbs reassured the family despite the devastating news. The following day Jake received a port (a device used for chemotherapy). As their world began to spin, the family began the journey no child or parent ever wants to begin.</p><p>On March 7, Jake began his first of six chemotherapy cycles, which would be followed by surgery to remove the affected bone. Post surgery, Jake would then require eight more chemo cycles. On June 2, Jake had surgery to remove the affected part of his fibula bone. The biggest concern throughout surgery was the nerve near the top of the bone that is wrapped very tightly around the fibula and controls the foot. If the tumor was embedded or wrapped around the nerve, it may have to be cut. That could have resulted in permanent loss of sensation to the foot. However, the first priority was to completely rid him of the cancer, and with Dr.Gibbs’ skillful hands he was able to save Jake’s nerve an successfully remove the bone.</p><p>The surgery was intense and recovery was quite painful, however when the pathology report on the tumor in the removed bone was returned, Jake and his family received better news than they could have expected. Due to the intense chemotherapy treatment prior to surgery, the tumor was found to be 95 percent dead. Successful results for such a condition is typically only 80 percent.</p><p>A few short weeks after the surgery, Jake still experienced numbness in some areas in his leg and foot and could not lift his big toe. Today, however, he is able to lift the rest of his foot, and it is very possible that over time the feeling and toe control will return. Though he still has some pain, it is controlled with simple ibuprofen. Because of the wonderful care he received at Shands, Jake has tossed aside his boot and crutches and has already resumed some physical activity - such as riding his unicycle again.</p>", "imageURL" : "../images/jakecrumpacker.jpg" },
			{"name" : "Marshal Fisher", "bio" : "<p>On Sept. 17, 2013, Marshal and I became a &ldquo;forever family&rdquo;, as I adopted him out of the Florida foster care system. He was 13 years old at the time of our adoption ceremony. We began strengthening a bond we had begun a year before that when I was mentoring him and fostering to adopt.</p><p>Our little family was strengthening and really beginning to find its own, when in May of 2014, we discovered a lump on the side of Marshal's right knee when he fell off his bike in the yard.  Upon seeing our pediatrician and having x-rays and more testing done, it was determined that we should go to Shands Hospital in Gainesville for further testing and a  biopsy to confirm if, in fact, the tumor was osteosarcoma - which it did indeed turn out to be.</p><p>Around that first week of May our world felt like it was turning upside down.  Heartfelt, deepest thanks to the nurses, doctors and staff at Shands for becoming our instant &ldquo;family&rdquo; - - providing for so many of our needs at a time when we certainly couldn't recognize them for ourselves.  It was paralyzing in a way and we didn't even know what to ask for or who to ask.   Marshal and I will be forever grateful to our Shands family, for taking us in and caring for us and all of our special needs.</p><p>That same month of May, Marshal began chemotherapy and would receive it until early July when the decision was made (bravely by Marshal and supported by me) to have the right leg amputated above the knee.  The surgery took place in July and from there we began the process of healing and learning mobility again of a different kind.   It was recommended that we go to Brooks Rehab in Jacksonville for some immediate attention to physical therapy, wheelchair instruction,  and continued care for about a week  Once again, all of those arrangements were set up by our friends at Shands.</p><p>Summer went on and we would eventually miss all of our vacation time with family , though they found times to visit us.  In August, we began returning to Shands again for more rounds of post-surgery chemotherapy.  I attempted to go back to work in my position as a high school teacher, but could only manage part-time (and at times missed many days as we continued to travel to Gainesville from Tallahassee for treatment). 	Marshal began the hospital homebound program here in Leon county.</p><p>Chemotherapy after surgery, physical therapy and additional minor surgeries continued on until this past January.  Within the first week of this new year we celebrated Marshal's end of chemo party !  We now are back in Tallahassee working towards consistency with a prosthetic leg and continuing to heal and gain strength from the entire experience.</p><p>Looking back, I have watched Marshal grow in so many ways. This was a young man who had previously known many obstacles in life, in fact his life had seldom been stable or consistent.  He has come such a long way - physically and emotionally.  With the help of everyone associated with Children's Miracle Network and Shands - from wonderful nurses and doctors to child life specialists to art therapists (Marshal is quite the artist !),..they each made Marshal feel cared for and special.</p><p>​Through Shands and the support of the Children's Miracle Network (our extended family )- we are forever grateful and we are making it ! Proud to call them incredible support system and friends.</p>", "imageURL" : "../images/marshalfisher.jpg" },
			{"name" : "Parker Fox", "bio" : "<p>When Parker was 3 years old, he was diagnosed with a precursor to leukemia called myelodysplastic syndrome.  After 28 radiation treatments and 14 days of high dose chemo, he had a bone marrow transplant at Shands Hospital in Gainesville.  Today, Parker is in his 10th year of remission!  He plays basketball, loves to jump on the trampoline, ride his bike, play Wii Just Dance 3 and tell jokes.  Parker is excited to be at his 9th FSU Dance Marathon. </p>", "imageURL" : "../images/parkerfox.jpg" },
			{"name" : "CHANDLER GWARTNEY", "bio" : "<p>Chandler was a very healthy 3 year old boy until February 2004, when he started complaining that he got stung by a bee.  His hand swelled up a little and a trip to the pediatrician’s office and soon it was forgotten.  Off and on the next few months, he would complain about his arm hurting, first one then the other arm with a couple trips to the pediatrician’s office and x-rays that revealed no broken bones.  In June 2004, was our last trip to the pediatrician’s office and x-rays with the words; “There is nothing else we can do for you unless you want to take him to an orthopedic doctor”.   A week and a half later, Chandler had a well-child check up at the pediatrician’s office and while there, the doctor examined him and when he felt his stomach, there was a mass.  First thing the next morning, Chandler was having an ultrasound of his stomach area.  The ultrasound revealed that his spleen was double its normal size.  So then Chandler was sent to a lab in town for blood work.  The blood work came back in a matter of hours instead of days and his white blood count was “off the charts”.  Immediately, we were on our way to Shands Hospital in Gainesville.</p><p>After arriving at Shands, Chandler was diagnosed with CML (Chronic Myeloid Leukemia), a form of leukemia that mainly affects adults, only one in a million children is diagnosed with CML.  Chandler spent a week on the pediatric floor at Shands before coming back home to Tallahassee.  During that week, he was approved to join a pediatric clinical study on the drug Gleevec.  Gleevec was the new miracle drug for CML; it changes the abnormal chromosome (the Philadelphia Chromosome) back to a normal chromosome without all the bad side effects that other chemos have.  He did not lose his hair nor have to change what he did or where he went while he was on it.   Since Gleevec was still a study drug, the only known cure for CML was a bone marrow transplant.   Chandler’s older sisters, Christy, 9 years old and Casey 6 years old, were tested to see if they were a match to be his bone marrow donor.  The Lord provided a perfect match through Christy.</p><p>The end of February, 2005, we moved the whole family down to Gainesville for 4 year old Chandler’s bone marrow transplant.   Chandler was checked into the Bone Marrow Transplant Unit and he began the rigorous chemotherapy that killed off his bone marrow.  On March 16, 2005, 10 year old Christy underwent surgery to remove her bone marrow from both of her hip bones.  After Shands’ lab techs cleaned up Christy’s  bone marrow removing  her A+ cells since Chandler’s blood was type O+, Chandler received it like a blood transfusion.   He had a reaction to the A+ blood at first but after some additional Benedryl , they restarted it and he was fine.</p><p>Chandler spent the next  5 weeks in the hospital waiting for Christy’s bone marrow to take over in his bone marrow.   On day +13, which happened to be Easter Sunday, Chandler started getting numbers on his blood work.  The numbers jumped around for a few days before it started really building up.  He was soon released from Shands to our apartment in Gainesville with regular visits to the Outpatient BMT Unit at Shands.  We were not expecting to get to move back home to Tallahassee until June but they let us come home the first of May…we liked to joke that we, big Seminole fans, were having too much fun in Gainesville so they sent us home early.  Chandler had a very weakened immune system so we had to be very careful what germs he was around.  By August, 2005, he was cleared to start going to church again and to be around friends.</p><p>In November, 2005, Chandler’s blood work came back with some abnormal chromosomes and with some male blood cells…his were all supposed to be his sister’s blood cells.  So the doctors at Shands started him back on the Gleevec.  He took it for 6 months and all his blood work came back normal.  He then relapsed a couple more times and in January, 2009, Christy donated her leukocytes to Chandler for a DLI (Donor Leukocyte Infusion).  Chandler received one batch of Christy’s leukocytes and then was in remission for a few months and then he relapsed again before the end of the year.  In January and April of 2010, Chandler received two more batches of Christy’s leukocytes (which were frozen from January, 2009).   Chandler has been in remission now since July 2009…the longest time of remission for him…we are praying for the cure word.   He goes back to Shand’s Hospital for appointments every three months.</p><p>The Children’s Miracle Network helped to make Chandler’s hospital stays and his doctor appointments much more endurable and somewhat fun.  They have put in TV/video  monitors in the infusion rooms and in the pre-operating rooms.  There were games and toys to play with and to help to take your mind off what is happening.   They even helped pay the salary of Chandler’s bone marrow doctor, who turned out to be a good friend of our family (even if she was a Gator).   Thank you for raising money to support Children’s Miracle Network for future kids that will need it.</p><p>Fun FSU vs UF stuff – Ceiling tiles at Shands Hospital…Chandler was 3 and saw a tile with FSU on it and he said “Football”.  We got to paint a ceiling tile for Chandler and his has a pirate ship with a Seminole head on the sail.  Every time we go to Shands, we wear our FSU shirts and/or carry our FSU backpack...we have to show our true colors.  While in the BMT Unit, every morning that a certain nurse was working, she would hide a Gator in Chandler’s room and he would find it and put a spear through it.  We redecorated a window that had a Gator with Go Gators painted on it…we put a spear through the gator and reworded the window with &ldquo;Go FSU Beat the Gators!&rdquo;.  After we moved out of that room, we walked by and looked in the door and it still had its FSU improvements.</p> ", "imageURL" : "../images/chandlergwartney.jpg" },
			{"name" : "MASON HOLDER", "bio" : "<p>Before birth, a hometown physician diagnosed Mason Holder with transposition of the great arteries via a 4-D ultrasound. Physicians told Mason's parents he would need to be delivered at Shands Hospital for Children at The University of Florida. At Shands, they could expect the best care and treatment for Mason as soon as he was born. Immediately following his birth, UF physicians fitted Mason with a heart catheter to temporarily stabilize his heart defect. At one week old, Mason underwent open-heart surgery to repair the transposed vessels so his blood would flow in the right direction. In an effort to allow is heart to swell freely, Mason's chest was left open for 2 days after surgery. Mason's family could see his heart beating through the bandage. At 2 weeks old, Mason was able to go home problem-free thanks to the care and treatment he received at Shands.</p><p>Today Mason is a fully functioning 8 year old with all of the energy of any other child his age. He plays baseball, guitar and makes A/B Honor Roll at school. He wants to coach for The University of Florida or be a country music singer when he grows up. Mason has been cleared of all medications and visits Shands every six months for check-ups.</p>", "imageURL" : "../images/masonholder.jpg" },
			{"name" : "GRAYSON IRWIN", "bio" : "<p>Grayson Irwin was a happy, content baby who loved to laugh and rarely cried. It wasn’t until he turned 11 months that he started exhibiting viral symptoms similar to those of chicken pox. But after four doctor visits in three weeks – and progressively worsening symptoms – it was clear to his parents, Brady and Janelle, that something much more severe was the cause.</p><p>&ldquo;As a mother, all I could tell the doctors was &#39;something isn’t right&#39;&rdquo;, Janelle recalled. &ldquo;His pediatrician sent for immediate bloodwork, and while they never mentioned the word &#39;leukemia&#39;, it was the only word that kept repeating in my head.&rdquo;</p><p>Just hours after his blood tests, the Irwins were called into their pediatrician’s office to learn that Grayson’s body appeared to be showing signs of leukemia, and Shands Children’s Hospital in Gainesville was expecting their arrival from Tallahassee.</p><p>&ldquo;We were reassured that Shands was the best place for Grayson, and we soon discovered that was absolutely correct,&rdquo; Janelle said.</p><p>Shortly after arriving at Shands, Grayson was diagnosed with Infant T-Cell Acute Lymphoblastic Leukemia, a type of blood cancer that starts from white blood cells in the bone marrow and can spread throughout the body to other organs. Because of his young age, Grayson was considered high risk and was started on a clinical trial protocol. After living in the hospital for six months to receive chemotherapy, medications and steroids, Grayson was discharged but would need to return weekly for treatments.</p><p>&ldquo;Because Grayson and I lived at the hospital for a good part of the year, everyone in the hospital became family,&rdquo; Janelle said. &ldquo;The facilities were bright and welcoming and truly intended for children. From the tiniest detail of the room to the entertainment equipment, I know Children’s Miracle Network had a huge part in that – and without those things, the days been have been much more challenging.&rdquo;</p><p>Now in his second year of treatment, Grayson receives intravenous chemotherapy at Shands once a month and chemotherapy medications and steroids at home. While his diagnosis carries a 10 percent survival rate, the clinical trial he joined has proved a 40 to 60 percent survival rate.</p><p>&ldquo;Research is coming a long way and Grayson is living proof of that,&rdquo; Janelle said. &ldquo;I am so thankful for Children’s Miracle Network for playing such a huge role in allowing me to celebrate my son’s second birthday.&rdquo;</p>", "imageURL" : "../images/graysonirwin.jpg" },
			{"name" : "ALYSSA MANN", "bio" : "<p>Biography coming soon!</p>", "imageURL" : "../images/alyssamann.jpg" },
			{"name" : "WILL MCBRIDE", "bio" : "<p>My husband and I we very excited to become parents, and at my 22 week ultra sound we learned that we were having a little boy! Our excitement turned to concern when we noticed the doctor was staring at the screen for a long time without saying anything. Finally he said, &ldquo;The baby’s heart is not normal&rdquo;.</p><p>We were then sent to Shands to see a specialist. Our  unborn son was diagnosed with Tricuspid Atresia, Pulmonary Stenosis and Hypoplastic Right Heart Syndrome.  His heart has no Tricuspid Valve and the right ventricle never formed leaving him with half a heart. Our son would need to undergo 3 heart surgeries in order to survive.</p><p>Will was born at Shands hospital March 2005. Although we knew he would need surgery, we were not prepared for the rollercoaster ride that was ahead of us that 1st week. Will was very sick and the doctors had a hard time keeping him stable. Finally at 8 days old a test revealed an artery that supplies blood to the lungs was pinching shut and he needed to be wheeled in to emergency surgery for the BT Shunt.</p><p>Will was born a blue baby, but when he came out of surgery he was pink! Will underwent 2 more open heart surgeries to redirect the blood flow so the left side of the heart does all the work.</p><p>Will is now a very active little boy. He has an amazing sense of humor and enjoys trying to make people laugh. He is also an expert on Transformers with a collection of over 300 figures. He also loves Minecraft and Stampy Cat.</p><p>Will’s heart has been doing very well since his last surgery. We have appointments with cardiology every 6 months at Shands, but we enjoy the time together on our long trips. We are so grateful for the Dance Marathon Team and all they do for families like ours!</p>", "imageURL" : "../images/willmcbride.jpg" },
			{"name" : "KAYLA MILLS", "bio" : "<p>Kayla was born with severe meconium aspiration, which occurs when a baby breathes in / ingests amniotic fluid containing meconium (the baby’s first stools) prior to birth. Kayla was further diagnosed with e-coli, pneumonia, persistent pulmonary hypertension and strep. Her lungs were so severely damaged from the aforementioned that she developed respiratory distress syndrome and was immediately put on a mechanical ventilator to breathe for her. Needing every ounce of strength to survive, the doctors decided to medically paralyze and blindfold her so that she would not be distracted by outside stimuli.</p><p>Still, Kayla’s condition continued to worsen and she was life-flighted to Shands Hospital in Gainesville. At the time, Shands was one of three hospitals in the entire United States that utilized a nitric oxide treatment, which was an experimental procedure used to help babies with this condition.  If that procedure failed to work, Kayla would need ECMO (extracorporeal membrane oxygenation) which was the draining of her blood from the venous system, oxygenating it outside the body and returning it to her body. Fortunately, Kayla was a fighter and did not need to have either of these procedures.  However, during the 10 days of being on a ventilator, she suffered a collapse of her right lung and had to have two blood transfusions.  Kayla was finally extubated from the ventilator and her parents held her for the first time!  Kayla was then transferred back to Tallahassee Memorial Hospital via ambulance where she stayed for an additional ten days before being released.</p><p>Today, Kayla is bright, artistic, energetic and healthy!  She enjoys traveling, drawing, music and spending time with friends and family.  If not for the funding provided by FSU’s Dance Marathon, Shands would not have been afforded the training, research and equipment available to save Kayla’s life or the lives of thousands of other children they have served over the years.  Thank you Dance Marathon, Shands Hospital and Children’s Miracle Network for saving our baby’s life!</p>", "imageURL" : "../images/kaylamills.jpg" },
			{"name" : "JACK MURRAY", "bio" : "<p>Jack Floyd Murray was born on June 2, 2001 in Tallahassee Florida.  He is one of 5 children, the only boy, with one older sister and 3 younger.  In May of 2012 when he was an 11 year old 6th grader, he was diagnosed with AML (Acute Myeloid Leukemia).    When his bloodwork came back not as mono but Leukemia our pediatrician told us to take him that very day to see Dr. Slayton at Shands Children’s Hospital.</p><p>Our first few days were a blur of tests and meetings as they worked to define exactly what type and subtype of leukemia he had.  We learned that instead of the more common ALL he had AML.  We also learned that it was in his spinal fluid as well.  The treatment for Jack’s AML was 4 consecutive rounds of chemotherapy.  They told us that he would likely be at Shands for 6 months and that it would be unlikely that he could go home at all during that time.</p><p>And so we became a family divided, with one parent at home with his sisters and one at the hospital from May until the end of October.   Jack celebrated his 12th birthday in the awesome game room in 42 Peds with visiting friends, pizza, cookie cake and games.  As the treatment continued visits like that would become less possible as he suffered the side effects and other illnesses that come with so much chemo and such a fragile immune system.  He was able to keep in touch with some of his friends through xbox live and a several sets of headsets!</p><p>Through it all Jack was amazing.  He defied the odds and we were able to bring him home for a couple of days in between some of the rounds!  How grateful we were to all be together and know that he was asleep in his own bed!  He always told the doctors, nurses and his parents exactly what was on his mind.  He didn’t complain (much), not nearly as much as he should have!  His distinctive sense of humor and practical jokes were a joy and we are so proud of him for holding on to that during his treatment!  (Ask him about his trip to the PICU and the monitors sometime, or the remote control spider!).</p><p>Jack is our HERO.<p>Our prayers were answered when we brought him home and we thank God every day for his remission!  We also thank God for the amazing doctors, nurses, volunteers, social workers, and everyone else who devotes so much of their lives to making it possible for kids like Jack to not only SURVIVE, but to have some comfort during that time!  The funds raised by CMN make such a huge difference in the level of care available for these kids!  What a difference it makes to know you have available the best and brightest and most dedicated doctors and nurses, the latest drugs and therapies, all of the support staff imaginable to help the kids and their families get through times like these!  And to the Dance Marathon kids, you ROCK!  It is not just about fundraising, it’s also how you make all of our kids feel special and loved, and we thank you for all that you do FTK!</p>", "imageURL" : "../images/jackmurray.jpg" },
			{"name" : "HUNTER NEWELL", "bio" : "<p>I went in for an ultrasound 2 ½ weeks before my due date and the baby was measuring to be 9 lbs 11 ozs.  Since he was measuring to be so large, the midwife decided to induce me the next day.  I went in for an induction and everything seemed fine as it was very similar to my first pregnancy.  Immediately after Hunter was born, the midwife handed him to me to hold.  It only took a couple seconds for us to realize that Hunter was having difficulty breathing as he was gasping for air.  The midwife immediately took Hunter and began to pat on his back to loosen up the fluid they thought was in his lungs.  Unfortunately, this did not help him.  After about 2 minutes, the midwife called down the NICU team to assess Hunter.  They quickly realized that they could not help Hunter and whisked him away to the NICU.</p><p>Hunter was immediately placed on a ventilator and a nitric oxide machine to allow oxygen to flow to his blood.  It was later discovered that Hunter suffered from a condition called Persistent Pulmonary Hypertension of the Newborn (PPHN).  Basically, this means that the blood vessels between the heart and the lungs did not open at birth and his lungs could not oxygenate his blood.  He remained at Tallahassee Memorial Hospital for two days, however, Hunter continued to get worse.  The doctors made a decision to life-flight Hunter to Shands Hospital when he was less than 2 days old.  The life-flight team picked Hunter up during the night and transferred him to Shands in Gainesville.  My husband and I were not allowed to fly with them and therefore went to see Hunter the very next morning.  When we arrived, the doctors sat us down and proceeded to tell us that “Hunter was a very, very, very sick child, and they weren’t sure he was going to make it.”  Hunter was the sickest child in the entire Shands NICU at that time.  Hour by hour, the doctors drew blood from his sick little body to check his oxygen levels.  A nurse was assigned to his bedside 24 hours a day and was not allowed to move more than 5 feet from his bed.  For the first week, we weren’t sure if he was going to survive.  I sat by his bedside from 8:00 in the morning until 12:00 at night, just staring at his chest as it raised up and down, praying that I would someday be able to take him home to the nursery that I had prepared.  I would go to a relative’s house nearby each night and wonder if Hunter knew he was without his mother, if he was scared, or if he was in pain.   The pain of wondering and waiting was unbearable.  After what seemed to be a lifelong roller coaster ride, Hunter finally began to make progress.  Hunter remained sedated for about 2 weeks before we were able to hold him in our arms.  After three weeks he was weaned from his pain medication and the oxygen and was able to begin feeding without a tube.  Once he learned how to eat a few days later, we were finally able to bring him home.</p><p>Since he has been home, Hunter has lived a normal childhood.  He is fully recovered from his condition, however, he continues to have respiratory issues.  He was hospitalized two times for pneumonia, and with the third round of pneumonia we were able to keep him home.  Hunter is now a typical three year old with an enormous amount of energy, a contagious laugh, and a love for babies.</p>", "imageURL" : "../images/hunternewell.jpg" },
			{"name" : "LAUREN PRICE", "bio" : "<p>Biography coming soon!</p>", "imageURL" : "../images/laurenprice.jpg" },
			{"name" : "JESSICA REWISKI", "bio" : "<p>Jessica was born 2 months early which caused many health complications. One of those being IVH: inter ventricular hemorrhage. (Bleeding in the brain. )This caused another condition called Hydrocephalus. Which means that the fluid cycle of cerebral spinal fluid  in your brain is blocked. Because of that, her brain started building up too much pressure and she had her first brain surgery When she was 12 months old. The amazing neurosurgeon at Shands Children's Hospital placed a life saving device in Jessica's brain called a shunt. This device maintains normal pressure in her brain and allows Jessica to live a normal, healthy life. As long as her shunt is functioning properly, so is Jess, but when the shunt equipment fails, Jessica faces life threatening issues and has to have surgery ASAP.</p><p>She has had 9 neuro surgeries in her life. She was even life-flighted to Shands once. Yikes!!!</p><p>On a normal day, she enjoys life, and is thankful for each day. School, work, church and hanging out with friends are her common activities. She loves the beach, fishing, spending time with family and cheering on the Red Sox with her dad. She has worked at Chick Fil A for almost 2 years and loves her job.</p><p>She will graduate from high school this year and start at TCC. Jess plans to go to nursing school and work with children so that she can show them as much compassion as the nurses showed her as a child. What ever path she takes, Jess will do so with alot of determination and compassion and she will succeed.</p>", "imageURL" : "../images/jessicarewiski.jpg" },
			{"name" : "COLIN THORN", "bio" : "<p>Biography coming soon!</p>", "imageURL" : "../images/colinthorn.jpg" },
			{"name" : "RAGAN THURSBY", "bio" : "<p>Ragan Thursby was born with Pitt Hopkins Syndrome, a neurological disorder with about only 400 cases diagnosed in the world. While this disorder may leave Ragan unable to speak with her mouth, her energy and smile can fill the room. Money from Dance Marathon at FSU and Children’s Miracle Network have helped fund research to better understand the complexities of Pitt Hopkins Syndrome. Ragan is a bright and beautiful seven year old girl, who is proving to the world that she is not defined by her disorder but by her spirit. Each day, Ragan conquers the symptoms of Pitt Hopkins Syndrome and your donations have helped to make sure that she can live each day to the fullest.</p>", "imageURL" : "../images/raganthursby.jpg" },
		]
	}
	$('#name').html(information.list[kidNumber].name);
	$('#bio').html(information.list[kidNumber].bio);
	var img = document.createElement('IMG');
	img.src = information.list[kidNumber].imageURL;
	$('#largeImage').append(img);
	$('#largeImage').children().last().addClass('img-responsive');
}
function getOrg() {
	var org = $('#selectOrg').val();
	var promo;
	switch (org) {
		case 'generic':
			promo = 'DM1';
			break;
		case 'exec':
			promo = 'DM2';
			break;
		case 'aco':
			promo = 'DM3';
			break;
		case 'adp':
			promo = 'DM4';
			break;
		case 'aep':
			promo = 'DM5';
			break;
		case 'agd':
			promo = 'DM6';
			break;
		case 'akp':
			promo = 'DM7';
			break;
		case 'aop':
			promo = 'DM8';
			break;
		case 'ap':
			promo = 'DM9';
			break;
		case 'apo':
			promo = 'DM10';
			break;
		case 'ato':
			promo = 'DM11';
			break;
		case 'adph':
			promo = 'DM12';
			break;
		case 'btp':
			promo = 'DM13';
			break;
		case 'co':
			promo = 'DM14';
			break;
		case 'cp':
			promo = 'DM15';
			break;
		case 'dac':
			promo = 'DM16';
			break;
		case 'dc':
			promo = 'DM17';
			break;
		case 'ddd':
			promo = 'DM18';
			break;
		case 'dg':
			promo = 'DM19';
			break;
		case 'dnz':
			promo = 'DM20';
			break;
		case 'dtd':
			promo = 'DM21';
			break;
		case 'dz':
			promo = 'DM22';
			break;
		case 'gpb':
			promo = 'DM23';
			break;
		case 'ka':
			promo = 'DM24';
			break;
		case 'kat':
			promo = 'DM25';
			break;
		case 'kd':
			promo = 'DM26';
			break;
		case 'kkg':
			promo = 'DM27';
			break;
		case 'ks':
			promo = 'DM28';
			break;
		case 'lsh':
			promo = 'DM29';
			break;
		case 'lul':
			promo = 'DM30';
			break;
		case 'pdt':
			promo = 'DM31';
			break;
		case 'pks':
			promo = 'DM32';
			break;
		case 'pkt':
			promo = 'DM33';
			break;
		case 'pm':
			promo = 'DM34';
			break;
		case 'psk':
			promo = 'DM35';
			break;
		case 'pbp':
			promo = 'DM36';
			break;
		case 'pka':
			promo = 'DM37';
			break;
		case 'pkp':
			promo = 'DM38';
			break;
		case 'plp':
			promo = 'DM39';
			break;
		case 'sae':
			promo = 'DM40';
			break;
		case 'sc':
			promo = 'DM41';
			break;
		case 'sdt':
			promo = 'DM42';
			break;
		case 'spe':
			promo = 'DM43';
			break;
		case 'sp':
			promo = 'DM44';
			break;
		case 'tke':
			promo = 'DM45';
			break;
		case 'tc':
			promo = 'DM46';
			break;
		case 'zbt':
			promo = 'DM47';
			break;
		case 'zta':
			promo = 'DM48';
			break;
		case 'mgc':
			promo = 'DM49';
			break;
		case 'hlsu':
			promo = 'DM50';
			break;
		case 'fiji':
			promo = 'DM51';
			break;
		default: 
        	promo = false;
		
	}
	if (promo == false) {
		alert("Please select an organization and try again")
	}
	else {
		$('#codePlaceholder').html(promo);
		$('#org').fadeOut('fast');
		$('#org').hide();
		$('#code').fadeIn('slow');
	}
}
function removeOrg() {
	$("#selectOrg").val("default");
	$('#code').fadeOut('fast');
	$('#code').hide();
	$('#org').fadeIn('slow');
	$('#codePlaceholder').html('');
	
}
function getApplication() {
	var app = document.getElementById('selectApp').value;
	if (app == 'a') {
		alert("Please select a valid option and try again.");
	}
	if (app == 'b') {
		$('#sidebarAnimation').hide();
		$('#apps').height(0);
		$('#overlay').fadeOut('fast');
		$('#overlay').hide();
		$('#captainsApp').show();
		$('#sidebarAnimation').delay('slow').fadeIn('slow');
	}
	if ((app == 'c') || (app == 'd') || (app == 'e') || (app == 'f')) {
		alert("This application is not available yet!")
	}

}

function forward() {
	position = $(document).scrollTop();
	$('#kidList').fadeOut('fast');
	$('#kidList').hide();
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	$('#biography').fadeIn('slow');
}
function back() {
	$('#biography').fadeOut('fast');
	$('#biography').hide();
	$('#kidList').fadeIn('slow');
	window.scrollTo(0, position);
	$('#name').html('');
	$('#bio').html('');
	$('#largeImage').html('');
}
$('#sidebar').affix({
	offset: {
		top: $('.pageHeader').height()
	}
});	
$('body').scrollspy({
	target: '.bs-docs-sidebar',
	offset: 40
});
$( document ).ready(function() {
    getName();
	/*if (!("ontouchstart" in document.documentElement)) {
    	document.documentElement.className += "touch";
	}*/
});
