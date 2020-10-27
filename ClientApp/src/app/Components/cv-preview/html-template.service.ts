import { Injectable } from "@angular/core";

export class HtmlTemplateService {
  constructor() {}

  static getListTemplate() {
    return `<div @list="@experienceList" class="contactLine" @hideIfNull="@address">
    <h4 class="contactLineHeader">Adres</h4>
    <h5 class="contactLineInfo" id="prev-address">@value2</h5>
    <h5 class="contactLineInfo" id="prev-address">@value1</h5>
</ @list="@experienceList" div>


<div @list="@experienceList" class="contactLine" @hideIfNull="@address">
<h4 class="contactLineHeader">Adres</h4>
    <h5 class="contactLineInfo" id="prev-address">@address</h5>
</div>`;
  }

  static getStyles() {
    return `
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    #nodeToRenderAsPDF {
      /* width: 2480px;
          height: 3508px; */
      /* visibility: hidden; */
      /* display: none; */
      width: 793px;
      height: 1122px;
      /* border: 1px solid red; */
      /* background: blue; */
    }
    
    #content {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
    }
    
    #sideMenu {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: space-around; */
      flex-basis: 30%;
      height: 100%;
      background: #151515;
    }
    
    #sideMenu img {
      width: 50%;
      margin: 50px 0 0;
    
      /* border: 1px solid red; */
      border-radius: 5px;
    }
    
    .name {
      font-size: 24px;
      color: whitesmoke;
      margin: 10px 0;
      font-weight: 400;
    }
    
    .contact {
      display: flex;
      flex-direction: column;
    
      /* height: 20%; */
      width: 70%;
      /* padding: 20px; */
      /* justify-content: center; */
      align-items: flex-start;
      justify-content: space-around;
    
      /* border: 1px solid blue; */
      color: whitesmoke;
    }
    
    .contactLine {
      padding: 10px 0 0;
    }
    
    .contactHeader {
      font-size: 20px;
      font-weight: 400;
      padding-bottom: 10px;
      border-bottom: 1px solid whitesmoke;
      width: 100%;
      margin-top: 40px;
      /* color: blue; */
    }
    
    .contactLineHeader {
      font-size: 16px;
      font-weight: 400;
    }
    
    .contactLineInfo {
      font-size: 14px;
      font-weight: 300;
    }
    
    #mainSection {
      flex-basis: 70%;
      background: whitesmoke;
    }
    
    .mainContent {
      padding: 40px;
      /* border: 1px solid red; */
    }
    
    .caption {
      font-size: 28px;
      width: 100%;
      padding: 0 0 10px;
      margin-bottom: 10px;
      border-bottom: 2px solid #151515;
    }
    
    .line {
      font-weight: 300;
      font-size: 20px;
    }
    
    .infoSectionLine {
      padding: 0 0 10px 0;
      /* border: 1px solid red; */
    }
    
    .infoSectionHeader {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
      text-align: justify;
    }
    
    .sectionInfo {
      font-size: 16px;
      margin-left: 20px;
      font-weight: 300;
      padding: 5px 0;
      text-align: justify;
    }
    
    #agreement {
      font-size: 9px;
      padding: 0 0px;
      text-align: justify;
    }
    `;
  }

  static getTemplate() {
    // return `<div class="contactLine" @hideIfNull="@address">
    // <h4 class="contactLineHeader">Adres</h4>
    // <h1>@address</h1>
    // <h1>@takjest</h1>
    // <h1>@address</h1>
    // <h1>@address</h1>
    // <h1>@takjest</h1>
    // </div @tak="@address">`;

    return `
    <div id="content">
      <section id="sideMenu">
        <img src="" alt="" id="prev-img" />
  
        <h4 class="name">@firstName @lastName</h4>
        <div class="contact">
          <h3 class="contactHeader">Kontakt</h3>
  
          <div class="contactLine" @hideIfNull="@address">
            <h4 class="contactLineHeader">Adres</h4>
            <h5 class="contactLineInfo" id="prev-address">@address</h5>
          </div>
          <div class="contactLine">
            <h4 class="contactLineHeader">Email</h4>
            <h5 class="contactLineInfo" id="prev-email">@email</h5>
          </div>
          <div class="contactLine">
            <h4 class="contactLineHeader">Telefon</h4>
            <h5 class="contactLineInfo" id="prev-phoneNumber">@phoneNumber</h5>
          </div>
          <div class="contactLine">
            <h4 class="contactLineHeader">GitHub</h4>
            <h5 class="contactLineInfo">github.com/lukaszkaczor</h5>
          </div>
  
          <h3 class="contactHeader" @removeIfEmpty="@languagesList" >Języki</h3 @removeIfEmpty="@languagesList" >
  
          < class="contactLine" @list="@languagesList">
            <h4 class="contactLineHeader">@language</h4>
            <h5 class="contactLineInfo">@level</h5>
          </ @list="@languagesList" div>
  
          <h3 class="contactHeader">Zainteresowania</h3>
  
          <div class="contactLine">
            <h5 class="contactLineInfo">programowanie</h5>
            <h5 class="contactLineInfo">motoryzacja</h5>
          </div>
  
          <h3 class="contactHeader">Inne</h3>
  
          <div class="contactLine">
            <h4 class="contactLineHeader">Prawo jazdy</h4>
            <h5 class="contactLineInfo">kategoria B</h5>
          </div>
        </div>
      </section>
  
      <section id="mainSection">
        <div class="mainContent">
          <div class="caption" @removeIfEmpty="@educationList" >Wykształcenie</ @removeIfEmpty="@educationList" div>
          

          <div class="infoSectionLine" @list="@educationList">
            <div class="infoSectionHeader">
              @schoolName
            </div>
  
            <div class="sectionInfo">Lata studiów: @startDate-@endDate</div>
            <div class="sectionInfo">Kierunek: @courseOfStudy</div>
            <div class="sectionInfo">
              Specjalizacja: @specialization
            </div>
          </ @list="@educationList" div>
  
          <div class="caption">Umiejętności</div>
  
          <div class="infoSectionLine" @list="@skillsList">
          <div class="infoSectionHeader" @nonRepeat>@tag</div>
          
          <div class="sectionInfo">@skill</div>

        
          </ @list="@skillsList" div>
  
  
          <p id="agreement">
            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
            niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
            r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (RODO).
          </p>
        </div>
      </section>
    </div>
 
  `;
  }
}
