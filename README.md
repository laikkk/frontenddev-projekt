### Kamil Zieliński
#### Zadania + *Projekt* 

##### Frontend
W projekcie zastosowano następujące funkcjonalność:
0. Routers
   *  Cztery path'y 
       *  dwa (dashboard i list) od nawigacji aplikacji, 
       *  kolejne dwa ('', '**' są do ustawienia defaultowego routa) *[np /dashboard123 -> /dashboard, / -> /dashboard]* 
0. Services
    * Dwa serwisy 
       * *PatientService* - do sciagania danych z backendu, używa *http*, *Observable*, różne http metody (POST, PUT, GET, DELETE)
       * *EditPatientService* - stworzony w celu pokazania, przekazywania parametrow przez serwis (singleton)
       * Provider BASE_URL
0. Guards
    * *ConfirmLeaveListComponentGuard* - ostrzega użytkownika przed opuszeniem nie zamknietego formularza
0. Components
    * Łącznie **Siedem**
    * plus *PatientFormComponent* reużywalny w kilku miejscach
    * Użyo w nich *Output, Input, ViewChild, FormControl + reactive functions, atrybuty ([disabled], [class.has-error], [(ngModel)], [formControl]))
0. Formularze
    * FormBuilder
    * Validators
    * Nice UI (użytko isDirty)
0. Nie ma 'starych' for'ów. Bazowano tylko na funkcyjnych metodach, *forEach*, *map*, *filter* itp.
0. Użyto Bootstrap 3 (przez npm'a !)
0. Czysty i przejżysty UI
0. Uporządkowana struktura katalogów (components/models/guards/services)


Aby uruchomić:
```sh
cd PatientBrowser
npm install
ng serve
```

##### Backend
*Własny backend napisany w **Nodejs** + TypeScript* 

Aby uruchomić:
```sh
cd patient-browser-backend
npm install
gulp #kill it after 2 sec
npm start
```

Możliwe trzeba podmienić BASE_URL w app.module.ts