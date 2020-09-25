import { Injectable } from "@angular/core";

export class HtmlTemplateService {
  constructor() {}

  static getTemplate() {
    return `<div class="contactLine" @hideIfNull="@address">
    <h4 class="contactLineHeader">Adres</h4>
    <h1>@address</h1>
    <h1>@takjest</h1>
    <h1>@address</h1>
    <h1>@address</h1>
    <h1>@takjest</h1>
    </div @tak="@address">`;

    return `<div id="nodeToRenderAsPDF">
    <div id="content">
      <section id="sideMenu">
        <img src="../assets/IMG_6795.JPG" alt="" id="prev-img" />
  
        <h4 class="name" id="prev-firstName">@firstName</h4>
        <h4 class="name" id="prev-lastName">@lastName</h4>
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
  
          <h3 class="contactHeader">Języki</h3>
  
          <div class="contactLine">
            <h4 class="contactLineHeader">Angielski</h4>
            <h5 class="contactLineInfo">poziom B2</h5>
          </div>
  
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
          <div class="caption">Wykształcenie</div>
  
          <div class="infoSectionLine">
            <div class="infoSectionHeader">
              Państwowa Wyższa Szkoła Zawodowa im. Stanisława Pigonia w Krośnie
            </div>
  
            <div class="sectionInfo">Lata studiów: 2016-2020</div>
            <div class="sectionInfo">Kierunek: Informatyka</div>
            <div class="sectionInfo">
              Specjalizacja: Technologie internetowe i bazy danych
            </div>
          </div>
  
          <div class="caption">Umiejętności</div>
  
          <div class="infoSectionLine">
            <div class="infoSectionHeader">Technologie</div>
  
            <div class="sectionInfo">C#</div>
            <div class="sectionInfo">SQL i relacyjne bazy danych</div>
            <div class="sectionInfo">Entity Framework / Framework Core</div>
            <div class="sectionInfo">LINQ</div>
            <div class="sectionInfo">HTML, CSS</div>
            <div class="sectionInfo">Podstawy TypeScript/JavaScript, jQuery</div>
            <div class="sectionInfo">
              Doświadczenie w tworzeniu aplikacji w ASP.NET MVC (.NET Framework i
              .NET Core)
            </div>
            <div class="sectionInfo">
              Podstawy Microsoft Azure, doświadczenie z usługami: DevOps -
              Pipelines, Web App, SQL Database, Functions App, Storage, Virtual
              Machines
            </div>
          </div>
  
          <div class="infoSectionLine">
            <div class="infoSectionHeader">W trakcie nauki</div>
  
            <div class="sectionInfo">Angular</div>
            <div class="sectionInfo">Testy jednostkowe (framework nUnit)</div>
            <div class="sectionInfo">Java/Android</div>
          </div>
  
          <div class="infoSectionLine">
            <div class="infoSectionHeader">Bazy danych</div>
  
            <div class="sectionInfo">Microsoft SQL Server</div>
            <div class="sectionInfo">PostgreSQL</div>
          </div>
  
          <div class="infoSectionLine">
            <div class="infoSectionHeader">Narzędzia</div>
  
            <div class="sectionInfo">Visual Studio 2019, ReSharper</div>
            <div class="sectionInfo">SQL Server Management Studio</div>
            <div class="sectionInfo">GIT</div>
          </div>
  
          <!-- <div class="infoSectionLine">
            <div class="infoSectionHeader">Inne</div>
  
            <div class="sectionInfo">Prawo jazdy kat. B</div>
          </div> -->
  
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
  </div>
  <div id="list">
    <div>
      <h1>@item</h1>
      <h1>@value</h1>
    </div>
  </div>
  <!-- <div id="list">
    <div class="item1">
      <div class="tej">
        <h1 class="name">@item</h1>
        <h1 class="value">@value</h1>
      </div>
    </div>
  </div> -->
  `;
  }
}
