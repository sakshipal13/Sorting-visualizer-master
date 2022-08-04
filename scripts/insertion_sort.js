function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#FF69B4");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#4B0082");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#4B0082");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#4B0082");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#4B0082");//Height update
    
            div_update(divs[i],div_sizes[i],"white");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#FF69B4");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"white");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#59FFA0");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#59FFA0");//Color update

    enable_buttons();
}