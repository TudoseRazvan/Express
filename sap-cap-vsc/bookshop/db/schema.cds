namespace com.sap.learning;

entity Authors{
    key ID : UUID;
        name : String(100);
        dateOfBirth : Date;
        dateOfDeath : Date;
}

entity Books{
    price : Price;
}

type Price{
    amount : Decimal;
    currency : String(3);
} 

type Genre : Integer enum{
    fiction = 1;
    non_fiction = 2;
}

