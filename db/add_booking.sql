insert into elevate_book(
    date,
    time,
    user_email,
    phone
) values (
    $1,
    $2,
    $3,
    $4
) returning date, time, user_email