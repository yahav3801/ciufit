import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactBtn from "./ContactBtn";

const Contact = () => {
  return (
    <section id="contact" className=" w-full px-4 md:px-8 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold  text-right">
          שאלות נפוצות
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Accordion
            type="single"
            collapsible
            className="col-span-1 space-y-4"
            dir="rtl"
          >
            <AccordionItem
              value="item-1"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                מה שעות הפעילות של הצהרון?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                הצהרון פועל מסיום הלימודים ועד השעה 17:00. בימי חופשה, הצהרון
                פועל במתכונת קייטנה מהשעה 07:30 עד 16:00.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                מה כוללת ארוחת הצהריים?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                ארוחת צהריים חמה ומזינה בבישול ביתי וטרי התפריט מתחלף מידי יום
                ומותאם לצרכים התזונתיים של הילדים.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                מה התוכנית החינוכית בצהרון?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                התוכנית כוללת פעילויות מגוונות: חוגי העשרה, פעילויות יצירה,
                משחקי חצר, פעילות גופנית, עזרה בשיעורי בית, זמן למשחק חופשי
                למידה והעשרה.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="col-span-1 space-y-4"
            dir="rtl"
          >
            <AccordionItem
              value="item-4"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                האם הצהרון פועל בחופשות?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                כן, הצהרון פועל בחופשות של משרד החינוך במתכונת של קייטנה, ובחופש
                הגדול נפרש לשני מחזורים. לוח תוכנייה מדויק נשלח להורים בתחילת
                המחזור.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                מהו היחס של אנשי הצוות לילדים?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                בצהרון פועל צוות מקצועי ומנוסה יחס חם ובית ואוהב.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-white rounded-xl shadow-sm border-none"
            >
              <AccordionTrigger className="text-right text-lg md:text-xl p-6 hover:no-underline hover:bg-sky-50 rounded-xl ">
                איך מתבצעת ההתקשרות עם ההורים?
              </AccordionTrigger>
              <AccordionContent className="text-right hebrew-period text-base md:text-lg px-6">
                אנו מקפידים על קשר רציף עם ההורים דרך קבוצת וואצאפ, ופרונטלית
                ניתן דיווח יומי על פעילות הילד, ועדכונים שוטפים על אירועים
                מיוחדים ופעילויות.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="inline-flex flex-col items-center">
          <h3 className="text-center text-xl font-bold my-2">
            ?יש לכם עוד שאלות
          </h3>
          <ContactBtn />
        </div>
      </div>
    </section>
  );
};

export default Contact;
