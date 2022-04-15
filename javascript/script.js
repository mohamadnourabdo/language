var o1=document.getElementById("img");
function MyFucntion(){
    o1.style.top="0px";
}
addEventListener("load",MyFucntion);
var o2=document.querySelector(".div");
var o3=document.getElementById("img2");
var isplay;
function MyClick(){
    if(isplay==false){
        o2.style.right="0px";
        o2.style.top="0px";
        isplay=true;
    }
    else{
        o2.style.right="-800px";
        o2.style.top="-500px";
        isplay=false;
    }
}
o3.onclick=()=>{
MyClick();
};
addEventListener("load",MyClick);
var o4=document.getElementById("section");

var o5=document.getElementById("ptime");
function MyTime(){
    var date=new Date();
    o5.innerHTML=`<span>${date.getHours()}</span>:<span>${date.getMinutes()}</span>:<span>${date.getSeconds()}</span>`;
}
setInterval(MyTime,1*1000);

var opera1=document.getElementById("button1");
var opera2=document.getElementById("button2");
opera1.addEventListener("click",()=>{
document.getElementById("img2").innerHTML=`المزيد`;
document.getElementById("input").setAttribute("placeholder","بحث");
document.getElementById("searchinput").innerHTML=`بحث`;
document.getElementById("hour").innerHTML=`الساعة`;
document.querySelector(".text1").innerHTML=`أسرار لغة الجسد وتعابير الوجه؟`;
document.querySelector(".text2").innerHTML=`تعبّر لغة الجسد عن الإشارات غير اللفظية التي نستخدمها للتواصل. وبحسب الخبراء، فإنّ هذه الإشارات تشكّل جزءًا كبيرًا من عملية التواصل اليومي بين البشر.

سواءً كان ذلك عن طريق حركات الجسد أو تعابير الوجه، هنالك كمّ كبير من المعلومات التي يتمّ إيصالها من خلال اللغة غير المحكية، حيث تشكّل لغة الجسد ما نسبته 60 إلى 65% من عملية التواصل الكليّة!
`;
document.querySelector(".text3").innerHTML=`الوضعية المنبسطة`;
document.querySelector(".text4").innerHTML=`وتتضمن إبقاء جذع الجسم مفتوحًا ومكشوفًا، حيث تشير هذه الوضعية إلى الانفتاح والودّ والاستعداد للتحاور أو التحدّث`;
document.querySelector(".text5").innerHTML=`الوضعية المنغلقة`;
document.querySelector(".text6").innerHTML=`وتكون عندما يتمّ إخفاء جذع الجسد من خلال الانحناء إلى الأمام أو الإبقاء على الذراعين والأرجل مضمومة. تدلّ هذه الوضعية في الكثير من الأحيان على العدوانية، عدم المودّة أو الشعور بالقلق.`;
document.querySelector(".text7").innerHTML=`تعابير الوجه`;
document.querySelector(".text8").innerHTML=`تخيّل للحظة ما يمكن لشخص أن يوصله للآخرين من خلال تعابير وجهه. الابتسامة مثلاً تعبّر عن الموافقة والسعادة. في حين يدلّ التكشير عن الاعتراض أو التعاسة.

وفي الكثير من الأحيان نجد أنّ تعابير الوجه تُظهر مشاعر الفرد الحقيقية تجاه موقف أو حدث معيّن. ففي الوقت الذي تقول فيه مثلاً أنّك بخير وعلى أفضل ما يرام، قد تُظهر تعابير وجهك غير ذلك، وتكشف عن حقيقة مشاعرك.

من الأمثلة على المشاعر التي يمكن التعبير عنها من خلال تعابير الوجه، نذكر الآتي:

السعادة
الحزن
الغضب
المفاجأة
الاشمئزاز
الخوف
الارتباك
الحماس والإثارة
الرغبة
الازدراء
بالإضافة إلى الكثير الكثير من المشاعر الأخرى.`;
document.querySelector(".text9").innerHTML=`الإيماءات`;
document.querySelector(".text10").innerHTML=`تعتبر إيماءات الجسد من أكثر إشارات لغة الجسد وضوحًا. التلويح باليدين، التأشير واستخدام الأصابع للتعبير عن الكميات العددية جميعها إيماءات واضحة سهلة الفهم.

لكن قد تختلف معاني الإيماءات الجسدية باختلاف الثقافات. فحركة الإبهام للأعلى (التي تدلّ على الإعجاب) أو إشارة السلام باستخدام إصبعي السبابة والوسطى المستخدمة في بلد معيّن قد تحمل معنى مختلفًا بل ومسيئًا في بلدان أخرى.

فيما يلي صور لبعض من أشهر الإيماءات حول العالم، وما يعنيه كلّ منها:

قبضة اليد المضمومة تعبّر غالبًا عن الغضب، وقد تشير في بعض الأحيان إلى التضامن مع الغير.`;
document.querySelector(".text11").innerHTML=`جميع الحقوق محفوظة لدى موقعنا@`;
localStorage.setItem("language","false");
});
opera2.addEventListener("click",()=>{
    document.getElementById("img2").innerHTML=`More`;
    document.getElementById("input").setAttribute("placeholder","search");
    document.getElementById("searchinput").innerHTML=`search`;
    document.getElementById("hour").innerHTML=`the time`;
    document.querySelector(".text1").innerHTML=`Secrets of body language and facial expressions?`;
    document.querySelector(".text2").innerHTML=`Body language expresses the nonverbal signals we use to communicate. According to experts, these signals form a large part of the daily communication process between humans.

    Whether it is through body movements or facial expressions, there is a large amount of information that is communicated through non-verbal language, with body language making up 60 to 65% of the total communication process!
    `;
    document.querySelector(".text3").innerHTML=`prone position`;
    document.querySelector(".text4").innerHTML=`It includes keeping the torso open and exposed, as this position indicates openness, friendliness, and willingness to converse or talk.`;
    document.querySelector(".text5").innerHTML=`closed position`;
    document.querySelector(".text6").innerHTML=`It is when the torso is hidden by bending forward or keeping the arms and legs together. This position often indicates aggression, lack of affection or a feeling of anxiety.`;
    document.querySelector(".text7").innerHTML=`face features`;
    document.querySelector(".text8").innerHTML=`Imagine for a moment what a person could communicate to others through their facial expressions. A smile, for example, expresses approval and happiness. On the other hand, the frown indicates opposition or unhappiness.

    In many cases, we find that facial expressions show the individual's true feelings about a specific situation or event. At the time when you say, for example, that you are fine and very well, your facial expressions may show otherwise, and reveal the truth of your feelings.
    
    Examples of feelings that can be expressed through facial expressions, we mention the following:
    
    happiness
    Sorrow
    anger
    surprise
    disgust
    the fear
    confusion
    Enthusiasm and excitement
    the desire
    contempt
    Plus a lot of other emotions.`;
    document.querySelector(".text9").innerHTML=`Gestures`;
    document.querySelector(".text10").innerHTML=`Body gestures are one of the most obvious signs of body language. Waving hands, pointing and using fingers to express numerical quantities are all clear and easy to understand gestures.
    
    But the meanings of physical gestures may differ in different cultures. A thumbs-up (denoting admiration) or the index and middle finger peace gesture used in one country may have a different and even offensive meaning in other countries.
    
    Here are pictures of some of the most famous gestures around the world, and what each of them means:
    
    A clenched fist often expresses anger, and can sometimes indicate solidarity with others.`;
    document.querySelector(".text11").innerHTML=`All rights reserved to our site @`;
    localStorage.setItem("language","true");
});
onload=MyTime();
onload=()=>{
    setTimeout(()=>{
        o4.style.right="0px"
    },1*1000);
    if(localStorage.getItem("language")=="false"){
        opera1.click();
    }
    else if(localStorage.getItem("language")=="true"){
        opera2.click();
    }
    else{
    
    }
}