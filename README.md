# 🎮 Kids Games E-commerce Platform (Full-Stack)

פלטפורמת Full-Stack מתקדמת למכירת משחקי ילדים, המציעה חווית משתמש נוחה ונגישה. הפרויקט כולל פיתוח צד שרת ב-ASP.NET Core C# עם Entity Framework, וצד לקוח ב-React, בשילוב עם מסד נתונים SQL Server.

## ✨ תכונות עיקריות

* **ממשק משתמש נוח ונגיש**: עיצוב ידידותי למשתמש עבור קניה וצפייה במשחקים.
* **ניהול תוכן מקיף**: פלטפורמת ניהול (Admin Panel) ליצירה, עריכה ומחיקה של משחקים, קטגוריות ועוד.
* **אינטגרציה עם מערכות חיצוניות**: שימוש ב-RESTful APIs לתקשורת עם שירותים חיצוניים (לדוגמה, שערי תשלום, ניהול מלאי).
* **ניהול מאגר נתונים**: אחסון ואחזור נתונים יעיל ממשחקים, משתמשים והזמנות.
* **מודל עבודה אסינכרוני**: שימוש ב-Axios לצורך תקשורת יעילה עם ה-API.
* **ניהול מצב גלובלי**: שימוש ב-React Context API לניהול מצב האפליקציה.

## 🛠️ טכנולוגיות בשימוש

* **Frontend**:
    * **React**: ספריית JavaScript לבניית ממשקי משתמש דינמיים.
    * **Context API**: לניהול מצב גלובלי באפליקציית React.
    * **Axios**: ספריית HTTP Client מבוססת Promise לביצוע בקשות ל-API.
* **Backend**:
    * **ASP.NET Core C#**: מסגרת עבודה מודרנית ומובילה לבניית יישומי Web ו-APIs עם C#.
    * **Entity Framework (EF)**: מנהל אובייקטים-רלציוני (ORM) לגישה ואינטראקציה עם מסדי נתונים.
    * **RESTful APIs**: לבניית שירותי רשת חזקים ומאובטחים.
* **Database**:
    * **SQL Server**: מערכת ניהול מסד נתונים יחסית (RDBMS) חזקה ואמינה מבית Microsoft.

## 🚀 התחלה מהירה

כדי להריץ את הפרויקט באופן מקומי, בצע את השלבים הבאים:

### דרישות קדם

ודא שהדברים הבאים מותקנים במערכת שלך:

* [.NET SDK](https://dotnet.microsoft.com/download) (גרסה 6.0 ומעלה)
* [Node.js](https://nodejs.org/en/download/) (מומלץ גרסה LTS)
* [npm](https://www.npmjs.com/get-npm) (מגיע עם Node.js)
* [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (או SQL Server Express/Developer Edition)
* [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms) (מומלץ לניהול המסד)

### התקנה והרצה

1.  **שכפול המאגר (Repository)**:
    ```bash
    git clone <YOUR_REPOSITORY_URL_HERE>
    cd <PROJECT_FOLDER_NAME>
    ```

2.  **הגדרת סביבת עבודה ל-Backend (שרת ASP.NET Core)**:
    * נווט לתיקיית ה-backend (לדוגמה, `src/Backend` או `KidsGames.API`):
        ```bash
        cd backend
        ```
    * **הגדרת מסד הנתונים**:
        * ודא ששרת SQL Server שלך פועל.
        * עדכן את Connection String בקובץ `appsettings.json` (או `appsettings.Development.json`) כך שתצביע על מופע SQL Server שלך.
        * הרץ את ה-Migrations ליצירת הסכמה של מסד הנתונים (אם משתמשים ב-EF Core Migrations):
            ```bash
            dotnet ef database update
            ```
    * **הפעלת השרת**:
        ```bash
        dotnet run
        ```
        השרת יפעל בדרך כלל על פורט `5000` (HTTPS) או `5001` (HTTP), אך יכול להשתנות בהתאם להגדרות הפרויקט.

3.  **הגדרת סביבת עבודה ל-Frontend (לקוח React)**:
    * נווט לתיקיית ה-frontend (לדוגמה, `src/Frontend` או `KidsGames.Web`):
        ```bash
        cd ../frontend
        ```
    * התקן את התלויות:
        ```bash
        npm install
        ```
    * **הגדרת משתני סביבה (אם קיימים)**: אם יש קובץ `.env` או הגדרות API URL, ודא שהם מצביעים לכתובת השרת של ה-ASP.NET Core.
    * הפעל את אפליקציית React:
        ```bash
        npm start
        ```
        האפליקציה תהיה זמינה בדרך כלל בכתובת `http://localhost:3000/`.

