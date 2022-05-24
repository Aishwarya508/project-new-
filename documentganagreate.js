function tryy(){
var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;


var sc=`
<div id="offer_letter" class="center">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h5>AngularBrain.Com</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h1>Offer Letter</h1>
<hr>
<p class="left">Dear <b>${name},</b></p>
<p class="left">We are pleased to offer you the full-time  position of <b>${Position}
}</b> at [AngularBrain.Com] with a start date of <b>${Join_Date}</b> ,Sallary <b>${Sallary}</b>
. You will be reporting directly to [manager/supervisor Shailesh sir] at [workplace location Deccon ]. We believe your skills and experience are an excellent match for our company.</p>

<p class="left"> Thanks And  Regrads</p>
<p class="left">Hr Sonali Deshpande</p>

<div align="right">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<p>Stamp and Sign</p>
</div>
</div>
`;

document.getElementsByClassName("letter_box")[0].innerHTML=sc;
}







function joining(){
var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;

var sc=`<div id="offer_letter" class="center">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h5>AngularBrain.Com</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h1>Joining Letter</h1>
<hr>
<p class="left">Dear <b>${name},</b></p>
<p class="left">
This letter is in response to your job Joinning  letter
 dated [<b>${Join_Date}</b>], I am glad to accept your job opportunity
  for the position of [<b>${Position}</b>] at the [angularbrain.com].
  I will be joining the job from [date of joining <b>${Join_Date}</b>].
  Sallary will be <b>${Sallary}</b>.
<br>
Kindly let me know if you need any further information.

Looking forward to working with you.
</p>

<p class="left"> Thanks And  Regrads</p>
<p class="left">Hr Sonali Deshpande</p>

<div align="right">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<p>Stamp and Sign</p>
</div>
</div>
`;
document.getElementsByClassName("letter_box")[0].innerHTML=sc;
}




function  icard(){

var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;

var sc=`<div id="Icard">
<div>
<h2>I Card</h2>
<img src="${photo_url}" width="200" height="220">
</div>
<div>
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h1>AngularBrain.Com</h1>
<br><hr><br>
<h4>Emp Name : <b>${name}</b></h4>
<h4>Emp Position : <b>${Position}</b></h4>

</div>
</div>`;

document.getElementsByClassName("letter_box")[0].innerHTML=sc;
}









function Aprasal(){
var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;

var sc=`<div id="offer_letter" class="center">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h5>AngularBrain.Com</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h1>Aprasal Latter</h1>
<hr>
<p class="left">Dear <b>${name},</b></p>
<p class="left">We are pleased to Aprasal you
form Next month <b>${Aprasal}</b> . Your old postiton
was <b>${Position}</b> and Sallary was <b>${Sallary}</b> .
 Your New Postion is : <b>${new_Position}</b> and
  New Sallary is  : <b>${new_Sallary}</b>.
.</p>

<p class="left"> Thanks And  Regrads</p>
<p class="left">Hr Sonali Deshpande</p>

<div align="right">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<p>Stamp and Sign</p>
</div>
</div>`;



document.getElementsByClassName("letter_box")[0].innerHTML=sc;

}



function Expreance(){
var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;

var today=new Date();
var sc=`<div id="offer_letter" class="center">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h5>AngularBrain.Com</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h1>Expreance Latter</h1>
<hr>
<p class="left">Dear <b>${name},</b></p>
<p class="left">
This is to certify that Mr ${name} worked
as a ${new_Position} with The angularbrain.com for
a period of two years. He joined our team
on ${Join_Date} and his last day was on [${today}]. <br><br>
It has been a wonderful experience to
work with Mr ${name}. His expertise in Tourism
Management and Digital Marketing is truly remarkable.
As a reservation manager, he would handle all the inbound
and outbound reservations. Moreover, he would professionally
recruit and train new staff, review schedules,
and handle the influx of reservations on a daily basis.
 His sheer brilliance and commitment have tremendously
 helped in the growth of the organisation
.</p>

<p class="left"> Thanks And  Regrads</p>
<p class="left">Hr Sonali Deshpande</p>

<div align="right">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<p>Stamp and Sign</p>
</div>
</div>`;

document.getElementsByClassName("letter_box")[0].innerHTML=sc;

}



function sllary_slip(){

var name=document.getElementsByTagName('input')[0].value;
var Position=document.getElementsByTagName('input')[1].value;
var Sallary=document.getElementsByTagName('input')[2].value;
var Join_Date=document.getElementsByTagName('input')[3].value;
var Aprasal=document.getElementsByTagName('input')[4].value;
var new_Position=document.getElementsByTagName('input')[5].value;
var new_Sallary=document.getElementsByTagName('input')[6].value;
var Sallary_Slip=document.getElementsByTagName('input')[7].value;
var photo_url=document.getElementsByTagName('input')[8].value;

var in_hand=8300;
var total=parseInt(Sallary)+in_hand;

var sc=`<div id="offer_letter" class="center">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<h5>AngularBrain.Com</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h1>Three Month Sallry Slip</h1>
<hr>
<p class="left">Dear <b>${name},</b></p>
<p class="left">Position : <b>${Position},</b></p>
<p class="left">Sallary : <b>${Sallary},</b></p>
<table width="100%" border="1">
<tr>
<th>SR NO</th>
<th>Allonce</th>
<th>Amount</th>
<th>Total</th>
</tr>
<tr>
<td>1</td>
<td>Besic</td>
<td>${Sallary}</td>
<td>${Sallary}</td>
</tr>
<tr>
<td>2</td>
<td>Travalling</td>
<td>2,000</td>
<td>2,000</td>
</tr>
<tr>
<td>3</td>
<td>Food</td>
<td>10,000</td>
<td>10,000</td>
</tr>
<tr>
<td>4</td>
<td>Medical</td>
<td>3,000</td>
<td>3,000</td>
</tr>
<tr>
<td>5</td>
<td>PF</td>
<td>- 3,500</td>
<td>- 3,500</td>
</tr>
<tr>
<td>6</td>
<td>LIC</td>
<td>- 3,200</td>
<td>- 3,200</td>
</tr>
<tr>
<td colspan="3">Variable</td>
<td>${total}</td>
</tr>
</table>

<br>
<table width="100%" border="1">
<tr>
<th>SR NO</th>
<th>Allonce</th>
<th>Amount</th>
<th>Total</th>
</tr>
<tr>
<td>1</td>
<td>Besic</td>
<td>${Sallary}</td>
<td>${Sallary}</td>
</tr>
<tr>
<td>2</td>
<td>Travalling</td>
<td>2,000</td>
<td>2,000</td>
</tr>
<tr>
<td>3</td>
<td>Food</td>
<td>10,000</td>
<td>10,000</td>
</tr>
<tr>
<td>4</td>
<td>Medical</td>
<td>3,000</td>
<td>3,000</td>
</tr>
<tr>
<td>5</td>
<td>PF</td>
<td>- 3,500</td>
<td>- 3,500</td>
</tr>
<tr>
<td>6</td>
<td>LIC</td>
<td>- 3,200</td>
<td>- 3,200</td>
</tr>
<tr>
<td colspan="3">Variable</td>
<td>${total}</td>
</tr>
</table>
<br>
<table width="100%" border="1">
<tr>
<th>SR NO</th>
<th>Allonce</th>
<th>Amount</th>
<th>Total</th>
</tr>
<tr>
<td>1</td>
<td>Besic</td>
<td>${Sallary}</td>
<td>${Sallary}</td>
</tr>
<tr>
<td>2</td>
<td>Travalling</td>
<td>2,000</td>
<td>2,000</td>
</tr>
<tr>
<td>3</td>
<td>Food</td>
<td>10,000</td>
<td>10,000</td>
</tr>
<tr>
<td>4</td>
<td>Medical</td>
<td>3,000</td>
<td>3,000</td>
</tr>
<tr>
<td>5</td>
<td>PF</td>
<td>- 3,500</td>
<td>- 3,500</td>
</tr>
<tr>
<td>6</td>
<td>LIC</td>
<td>- 3,200</td>
<td>- 3,200</td>
</tr>
<tr>
<td colspan="3">Variable</td>
<td>${total}</td>
</tr>
</table>

<p class="left"> Thanks And  Regrads</p>
<p class="left">Hr Sonali Deshpande</p>

<div align="right">
<img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" width="150" height="100">
<p>Stamp and Sign</p>
</div>
</div>`;
document.getElementsByClassName("letter_box")[0].innerHTML=sc;

}



function p(){
document.getElementsByClassName("side_form")
[0].innerHTML='';
print();
}