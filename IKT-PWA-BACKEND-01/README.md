# BeReal als Progressive Web App (PWA)

Dieses Projekt ist die Semesteraufgabe für das Modul "Aktuelle Trends der Informations- und Kommunikationstechnik 2023" in Form einer Progressive Web App. 
Diese README gibt Auskunft über:

- die Installation, 
- die Nutzung der hier vorliegenden PWA, 
- die PWA Funktionalitäten und 
- das Produktziel bzw. die Vision die hinter BeReal steckt sowie 
- die Änderungen und Erweiterungen zum aktuellen Projekt. 


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

- (Hintergrundsynchronisation wurde implementiert)


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

- Speichern im Frontend 