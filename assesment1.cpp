#include <iostream>

using namespace std;

int main()
{
  int t,p,k=0,m=0;
  string str;
  cin>>str;
  cin>>t>>p;
  
  for(int i = 1 ; i<=str.length();i++){
      if(t==1){
          for(int j = 1; j<=str.length();j++)
          {
              if(j%p!=0)
              cout<<str[j-1];
              else if(j%p==0)
              putchar(tolower(str[j-1]));
              //cout<<str[j];
              k++;
              
          }
          
          if(k!=0)
          break;
          
      }
      
      if(t==2){
          for(int j = 1; j<=str.length();j++)
          {
              if(j%p!=0)
              cout<<str[j-1];
              else if(j%p==0)
              putchar(toupper(str[j-1]));
              m++;
              
          }
          if(m!=0)
          break;
          
      }
  }
  
   return 0;
}
