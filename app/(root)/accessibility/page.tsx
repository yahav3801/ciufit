import React from "react";

const Accessibility = () => {
  return (
    <main dir="rtl" className="min-h-screen w-full py-8 px-4 bg-white mt-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          הצהרת נגישות צהרון כיופית קרית אתא 2025
        </h1>

        <section className="mb-8">
          <p className="mb-4">
            חברת צהרון כיופית הינה חברה למתן שירותים/מוצרים בתחום הצהרונים
            בהצהרה זו מטרתנו לייעל את השימוש ולשפר את השירות שלנו בכל הנוגע
            לנגישות ושוויון זכויות לאנשים בעלי מוגבלויות.
          </p>

          <p className="mb-4">
            התאמת הנגישות שלנו בוצעה בהתאם לתקנה 35 בתקנות שוויון זכויות לאנשים
            עם מוגבלות (התאמות נגישות לשירות) התשע"ג 2013 לרמה AA בכפוף לשינויים
            והתאמות שבוצעו במסמך התקן הישראלי.
          </p>

          <p className="mb-4">
            התאמת הנגישות נבדקה בדפדפנים כרום, פיירפוקס, ספארי, ואדג'.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            אמצעי נגישות הקיימים באתר:
          </h2>
          <div className="space-y-2">
            <p>
              תמיכה בכל הדפדפנים התקניים המקובלים (כמו Chrome, Explorer,
              FireFox, Opera)
            </p>
            <p>תכני האתר נכתבו בשפה ברורה ונעשה שימוש בפונטים קריאים </p>
            <p>מבניות האתר בנויה מכותרות, פסקאות ורשימות </p>
            <p>התמצאות באתר היא פשוטה ונוחה וכוללת תפריטים זמינים וברורים </p>
            <p>הקישורים באתר ברורים ומסבירים להיכן מועברים לאחר לחיצה עליהם</p>
            <p>קישורים בתחילת הדף המאפשרים דילוג לתוכן </p>
            <p>תיאור טקסטואלי לתמונות ואייקונים עבור טכנולוגיות מסייעות </p>
            <p>התאמת האתר לסביבות עבודה ברזולוציות שונות (רספונסיביות) </p>
            <p>אמצעי עצירה והפעלה של גלריות תמונות וסרטונים </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">שינוי תצוגה באתר</h2>
          <div className="space-y-2">
            <p>
              ניתן להגדיל או להקטין את תצוגת האתר באמצעות לחיצה על אחד מכפתורי
              ה- "CTRL" ביחד עם גלגלת העכבר או ביחד עם הסימן "+" עבור הגדלה או
              ביחד עם הסימן "-" עבור הקטנת התצוגה
            </p>
            <p>
              גולשים אשר אין ברשותן עכבר או שאינם יכולים לעשות שימוש בעכבר
              יכולים להפעיל את התכונות המצויות באתר על ידי לחיצה על המקש "TAB"
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            התאמת אתר למוגבלי ראייה ושמיעה
          </h2>
          <div className="space-y-2">
            <p>מגדילי ראות (רזולוציה) בסיסיים </p>
            <p>תוכנות זיהוי קולי </p>
            <p>חבילות זיהוי קולי של מערכות ההפעלה </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">סייגים לנגישות</h2>
          <p className="mb-4">
            הנהלת האתר עושה ככל שניתן על מנת לוודא כי כלל הדפים המוצגים יהיו
            מונגשים. יחד עם זאת, יתכן וישנם דפים שטרם הונגשו, או שטרם נמצא פתרון
            טכנולוגי מתאים לצורך הנגשתם.
          </p>
        </section>

        <footer>
          <h2 className="text-2xl font-bold mb-4">
            נתקלתם בבעיה? אנחנו כאן כדי לסייע!
          </h2>
          <p className="mb-2">פרטי אחראי נגישות באתר:</p>
          <p className="mb-1">שם: יהב בן הרוש</p>
          <p>אימייל: ybh00790@gmail.com</p>
        </footer>
      </div>
    </main>
  );
};

export default Accessibility;
