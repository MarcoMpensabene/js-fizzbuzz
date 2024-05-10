> Consegna:
> Scrivi un programma che stampi in console i numeri da 1 a 100, 

    *ma che per i multipli di 3 stampi “Fizz” al posto del numero e
    *per i multipli di 5 stampi “Buzz”.
    *Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
> Prima di partire a scrivere codice poniamoci qualche domanda:
> Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?Consigli del giorno:
> Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
> Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"BONUS 1:
> Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.BONUS 2:
> Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.



-Per prima cosa mi creo un ciclo for che stampa dei numeri da 1 a 100 in console
    i=0 , i <= 100 , i ++ ;
    Dopo aver stampato i numeri ho bisogno di fare dei controlli all'interno del ciclo for di i per sapere se sono:
        *multipli di 3 = dicendo a i che se diviso per 3  da resto 0 
            se la condizione è vera stampa "Fizz " in console al posto del numero
        *multipli di 5 = dicendo a i che se diviso per 5  da resto 0 
            se la condizione è vera stampa "Buzz"  in console  al posto del numero
        *multipli di 3  E multipli di 5 = facendo entrambi i controlli precedenti con un and 
            se la condizione è vera stampa  "FizzBuzz" al posto del numero
        
- Dopo aver appurato che il nostro programma stampa tutto correttamente in console dobbiamo creare all'interno del documento html un container e tramite append() aggiungiamo gli elementi da mostrare.

        