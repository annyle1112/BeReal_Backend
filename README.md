# BeReal als Progressive Web App (PWA)

Dieses Projekt ist die Semesteraufgabe für das Modul "Aktuelle Trends der Informations- und Kommunikationstechnik 2023" in Form einer Progressive Web App. 
Diese README gibt Auskunft über:

- die Installation, 
- die Nutzung der hier vorliegenden PWA, 
- die PWA Funktionalitäten und 
- das Produktziel bzw. die Vision die hinter BeReal steckt sowie 
- die Änderungen und Erweiterungen zum aktuellen Projekt. 
- Screenshots (für die Semesterabgabe) 

## 1) Die Installation von BeReal

Voraussetzung zum Ausführen des Projektes ist die vorherige Installation von Node.js (https://nodejs.org) und einer einer MongoDB auf dem Computer.
Registrierung unter https://www.mongodb.com/de-de und Installation: https://www.mongodb.com/try/download/compass


Zum Starten des Projektes im Terminal in den Projektordner "BeReal" gehen und dort 

    `npm install`

ausführen. Dadurch werden alle erforderlichen Abhängigkeiten installiert. Im Anschluss

	`npm start` 

ausführen, um das Frontend zu starten und es im Browser unter localhost:8080 zu öffnen.


Nun ein weiteres Terminalfenster öffnen und in den Backend-Ordner wechseln und dort
    
    `npm run watch` oder 'node server.js'

ausführen, um das Backend zu starten und zum automatischen Anlegen einer zum Projekt passenden Database "posts", in welcher die mit der App erstellten Postings gespeichert werden können.



## 2) Die Nutzung der Anwendung (BeReal)

Auf der Startseite können zum einen die Menüpünkte sowohl im Header, auch auch im Hamburger Menü eingesehen werden (Bilder/ Feed, Hilfe, Einstellungen unter Hilfe) - zum anderen das Startbild von BeReal und die Collection der eigenen BeReal's. Zu Beginn sind dort noch keine Posts zu sehen (nur eine Collection ist für die Semesteraufgabenabgabe zuvor gepostet worden).

Auf der Startseite können über das rote Plus-Icon (unten rechts) das Eingabeformular um ein neues BeReal zu erstellen, geöffnet werden.

Nach dem Klicken des Roten Plus-Buttons müssen Zugriff auf Kamera und Location erlaubt werden. Nun kann man ein BeReal-Foto schiessen (Gerätekamera) oder auswählen (unter 'Datei auswählen'), ein 'Titel' vergeben sowie die Location. Letzteres kann manuell oder über den Location-Finder Button erfolgen um den Ortungsdienst zu nutzen.
Wird eines der Angaben nicht angegeben, erscheint ein Pop-Up Fenster mit der Aufforderung, das leere Feld zu füllen.

Durch den Button "Speichern" wird der Erstellungsprozess abgeschlossen und durch Neuladen der Seite erscheint das neu erstellte BeReal am Fuße der Seite. 

Über das Navigationsmenu oben rechts (bei großen Bildschirmen) oder im Hamburger Menü oben links (bei schmaleren Bildschirmen) kann entweder auf einer "Hilfe" Seite eine Hilfestellung zur Nutzung der Anwendung angesehen werden oder über den Benachrichtigunsbutton, die Erlaubnis zum Empfang von Push-Nachrichten erteilt werden.

Um das Ziel von BeReal zu verstehen, bitte Punkt 4) in dieser Datei lesen.


## 3) Die PWA Funktionalitäten von BeReal

BeReal hat ein responsives Frontend und eine MongoDB im Backend 
und in ihrem Code sind folgende PWA Funktionalitäten angelegt:

- Installierbarkeit der App

- Offline-Nutzbarkeit (Standort muss offline ohne den Locationfinder manuell angegeben werden)

- Verwendung von Indexed DB

- Gerätezugriff auf die Kamera als Alternative zum Dateiupload

- Verwendung der Geolocation API um den Ortungsdienst zur Standorterfassung nutzen zu können

- Erlaubniserteilung der Userin zum Empfang von Push-Notifications

- Nutzung auf dem Handy (ngrok)

- Hintergrundsynchronisation wurde implementiert


## 4) Das Produktziel von BeReal 

BeReal ist SocialMedia in Authentisch. Instagram und Facebook zeigen zum Großteil nur tolle Posen und schöne Urlaubsbilder und lassen das eigene Leben oft grau und traurig ausschauen. Das soll sich mit BeReal ändern. IT'S TIME TO BE REAL. BeReal soll dich und dein wahres schönes Leben zeigen - sei es frisch morgens im Bett oder tagelang am Tisch für die nächste Klausur lernen. BeReal hat das Konzept jeden Tag - morgens - mittags - abends - das wahre Leben zu teilen und stolz zu zeigen. Es wird also nicht nur im Urlaub oder in schönen Kleidern gepostet, sondern jeden Tag bei ganz alltäglichen Tätigkeiten. Teile so dein echtes Leben mit deinen Freunden und verlasse die Fake Social Media Bubble. Be Real mit BeReal!

UserInnen könnnen sich mit der fertigen App BeReal's erstellen und dabei ihre individuelle BeReal Collection mit täglichen Be Real Posts stetig erweitern. 

Diese BeReal's können im Textformat und als Foto hinterlegt sein. + Location.

Die App kann das Leben der UserInnen umso authentischer und echter zeigen um so größer die BeReal-Datenbank ist. Der Aufbau und das Einpflegen dieser Datenbank muss von der UserIn selbst geleistet werden. 


## 5) Geplante Änderungen und Erweiterungen BeReal

- Design der BeReal Collection in 3x3 Kacheln (siehe Instagram)

- Standortangabe wird optional angeboten

- Accounterstellung

- Es bedarf passwortgeschützter User-Accounts, die UnserInnen bei Bedarf mit andern Userinnen teilen können

## 6) Screenshots 

- Zugriffsanfrage Kamera (Gerätekamera aktiviert, wenn zugelassen)
![Screenshot (2630)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/b58e4dd4-2e1b-42a8-a2f3-25535067e295)

- Zugriffsanfrage Kamera abgelehnt
  ![Screenshot (2631)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/9b0f71de-0879-4ce9-8e7e-e14c8c34db87)

- Zugriffsanfrage Location
  ![Screenshot (2637)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/a56cd31f-d170-42a6-b53a-a75300cdd023)

- Zugriffsanfrage Location abgelehnt
  ![Screenshot (2641)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/c6252bc6-a160-4d0d-bf6d-91373ed31477)

- Zugriffsanfrage Push-Notification
  ![Screenshot (2643)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/398bca9e-6500-4491-a3e5-540e576ce7fc)
![Screenshot (2644)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/d972338e-b0e4-45ce-847a-0737ef886965)

- Offline-Nutzung
  ![Screenshot (2648)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/c9a9924a-708d-4cbc-aaf2-fdbc29390873)
  ![Screenshot (2650)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/8d93913a-d782-452e-ae20-f6b42b34d9ff)
 ![Screenshot (2656)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/fad04c3e-d548-42a3-b6a8-60c9371d8277)

- Hintergrundsynchronisation
  ![IMG-20230926-WA0048](https://github.com/annyle1112/BeReal_Backend/assets/82587485/5450ac14-09e5-4f5a-8462-531624e66ec1)

- Indexed DB
  ![Screenshot (2645)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/8aa5e0d4-91c2-40e0-9bda-ace1fc91abc2)

- MongoDB
![Screenshot (2646)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/f1c1ae7f-fefb-4ffb-aa3a-7c95581a6895)
![Screenshot (2647)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/02b0421a-c9e0-447f-82ab-2da5fa6e3bc8)

- 1 BeReal posten
  ![Screenshot (2652)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/a57c90de-62b7-493c-9e86-c1fcbaec81f1)
  ![Screenshot (2639)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/ac749174-1a5d-4851-bb9e-40d2fafe4381)
  ![Screenshot (2640)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/2b15dfc1-4d78-41e1-b966-02857db76d31)
  ![Screenshot (2654)](https://github.com/annyle1112/BeReal_Backend/assets/82587485/3be4a8c7-b9e6-43c6-98fc-878d8904ae86)

  - Handynutzung
    ![IMG-20230926-WA0043](https://github.com/annyle1112/BeReal_Backend/assets/82587485/c1a46c2d-77e3-495b-8ab5-8c1274353362)
    ![IMG-20230926-WA0044](https://github.com/annyle1112/BeReal_Backend/assets/82587485/51775b96-e0e2-4735-ad95-520ceaa8e414)
![IMG-20230926-WA0045](https://github.com/annyle1112/BeReal_Backend/assets/82587485/92747b23-c79f-4236-aebf-a5e4e13b786b)
![IMG-20230926-WA0046](https://github.com/annyle1112/BeReal_Backend/assets/82587485/e0bf9526-29e2-4824-8c44-0e73e2512c3a)
![IMG-20230926-WA0047](https://github.com/annyle1112/BeReal_Backend/assets/82587485/53654547-1aaf-46f0-a733-d0e6feea0c41)
![IMG-20230926-WA0048](https://github.com/annyle1112/BeReal_Backend/assets/82587485/1c008cb0-e5d5-48ed-b3b3-7cf95632d4b6)
![IMG-20230926-WA0049](https://github.com/annyle1112/BeReal_Backend/assets/82587485/e1e9516a-e1bf-4745-aba7-430136b29754)

    




