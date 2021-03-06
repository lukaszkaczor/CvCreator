
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'1', N'Admin', N'Admin', NULL)
GO
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'5cc6b828-5d22-4a3e-a475-735b9c694d9f', N'admin@cvcreator.com', N'ADMIN@CVCREATOR.COM', N'admin@cvcreator.com', N'ADMIN@CVCREATOR.COM', 0, N'AQAAAAEAACcQAAAAED3qzppDOGHLLLjJ6gTEqQr09nb5vxL2bAWEl9tivstSPXA/wrSFYSf7uB8ae7ZQFw==', N'T6WFB2FBPRISSGW27QBI4WEJ4KA3WNQB', N'06291d66-68f9-4f07-9ac6-a72355db8257', NULL, 0, 0, NULL, 1, 0)

GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5cc6b828-5d22-4a3e-a475-735b9c694d9f', N'1')
GO
SET IDENTITY_INSERT [dbo].[Templates] ON 

INSERT [dbo].[Templates] ([Id], [Name], [ImageUrl], [Html], [Styles], [IsActive]) VALUES (60, N'Szablon 1', N'https://www.cv-maker.pl/assets/images/cvs/3/cv-example-standford-424954.jpg', N'        <div id="content">
            <section id="sideMenu">
                <img src="@image" alt="" id="prev-img" />
        
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

                    <div @list="@contactList">
                        <div class="contactLine">
                            <h4 class="contactLineHeader">@name</h4>
                            <h5 class="contactLineInfo">@url</h5>
                        </div >
                    </div @list="@contactList">
        
                    <h3 class="contactHeader" @removeIfEmpty="@languagesList">Języki</h3
                        @removeIfEmpty="@languagesList">
        
                    <div  @list="@languagesList">
                        <div class="contactLine">
                            <h4 class="contactLineHeader">@language</h4>
                            <h5 class="contactLineInfo">@level</h5>
                        </div>
                    </div @list="@languagesList">
        
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
                    <div class="main-list">
                        <div class="caption" @removeIfEmpty="@educationList">Wykształcenie</div
                            @removeIfEmpty="@educationList">
            
            
                        <div class="infoSectionLine" @list="@educationList">
                            <div class="infoSectionHeader margin-bottom">
                                @schoolName
                            </div>
            
                            <div class="sectionInfo">Lata studiów: @startDate - @endDate</div>
                            <div class="sectionInfo">Kierunek: @courseOfStudy</div>
                            <div class="sectionInfo">
                                Specjalizacja: @specialization
                            </div>
                        </div @list="@educationList">
            
                        <div class="caption">Umiejętności</div>
            
                        <div class="infoSectionLine" @list="@skillsList">
                            <div class="infoSectionHeader" @nonRepeat>@tag</div>
                            <div class="sectionInfo">@skill</div>
                        </div @list="@skillsList">
                    </div>

                    <p id="agreement">@agreement</p>
                </div>
            </section> 
        </div>', N'@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content * {
  font-family: "Poppins", sans-serif;
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
  border-radius: 5px;
}

.name {
  font-size: 22px;
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
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid whitesmoke;
  width: 100%;
  margin-top: 40px;
  /* color: blue; */
}

.contactLineHeader {
  font-size: 15px;
  font-weight: 400;
}

.contactLineInfo {
  font-size: 13px;
  font-weight: 300;
}

#mainSection {
  flex-basis: 70%;
  background: whitesmoke;
}

.mainContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  height: 100%;
}

.caption {
  font-size: 25px;
  width: 100%;
  padding: 0 0 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #151515;
}

.caption:not(:first-of-type) {
  margin-top: 15px;
}

.infoSectionLine {
  /* padding: 0 0 10px 0; */
}

.infoSectionHeader {
  font-size: 16px;
  font-weight: 400;
  /* margin-bottom: 10px; */
  margin-top: 10px;
  text-align: justify;
}

.sectionInfo {
  font-size: 14px;
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

.margin-bottom {
  margin-bottom: 10px;
}
', 1)
INSERT [dbo].[Templates] ([Id], [Name], [ImageUrl], [Html], [Styles], [IsActive]) VALUES (61, N'Szablon 2', N'https://i.pinimg.com/originals/cc/5b/74/cc5b74f6129f72acd313a4181ee9b662.png', N'<div id="content">
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
    </div>', N'@import url(''https://fonts.googleapis.com/css2?family=Bangers&display=swap'');    
#content {
      display: flex;
 flex-direction: row-reverse;
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
    }', 1)
INSERT [dbo].[Templates] ([Id], [Name], [ImageUrl], [Html], [Styles], [IsActive]) VALUES (62, N'nieaktywny', NULL, N'asd', N'asd', 0)
SET IDENTITY_INSERT [dbo].[Templates] OFF
GO
