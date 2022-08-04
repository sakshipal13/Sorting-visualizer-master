function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#4B0082");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#FF69B4");//Color update, yellow

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"white");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#4B0082");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"white");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#4B0082");//Height update
            div_update(divs[i],div_sizes[i],"#4B0082");//Height update
            div_update(divs[index_min],div_sizes[index_min],"white");//Color update
        }
        div_update(divs[i],div_sizes[i],"#59FFA0");//Color update
    }
    div_update(divs[i],div_sizes[i],"#59FFA0");//Color update

    enable_buttons();
}