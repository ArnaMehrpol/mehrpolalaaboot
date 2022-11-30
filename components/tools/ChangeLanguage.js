let
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
englishNumbers  = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
persianNumbersCh = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
englishNumbersCh  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const fixNumbers = (str) =>
{
  if(typeof str === 'string') 
  {
    for(let i=0; i<10; i++)
    {
      str = str.replace(englishNumbers[i], persianNumbersCh[i])
    }
  }
  return str;
};

export const fixNumbersEnglish = (str) =>
{
  if(typeof str === 'string')
  {
    for(let i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], englishNumbersCh[i])
    }
  }
  return str;
};

// str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);