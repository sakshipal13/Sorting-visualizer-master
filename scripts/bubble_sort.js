function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#FF69B4");//Color update yellow=fdc639

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#4B0082");//Color update, purple
                div_update(divs[j+1],div_sizes[j+1], "#4B0082");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#4B0082");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#4B0082");//Height update
            }
            div_update(divs[j],div_sizes[j], "white");//Color update
        }
        div_update(divs[j],div_sizes[j], "#59FFA0");//Color update
    }
    div_update(divs[0],div_sizes[0], "#59FFA0");//Color update, #d6ca98 green

    enable_buttons();
}