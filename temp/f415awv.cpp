
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    int a=0;
    int b=0;
    for(int i=0; i<nums.size()-1; i++)
    {
        for(int j=i+1; j<nums.size(); j++)
        {
            if(nums[i]+nums[j]==target)
            {
                a=i;
                b=j;
            }
        }
    }

    cout << a << " " << b<< endl;

}
