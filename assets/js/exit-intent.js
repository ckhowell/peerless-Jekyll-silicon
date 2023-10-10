<script>document.addEventListener("mouseleave", function(e){
    if( e.clientY < 0 )
    {
        if(Number(sessionStorage.exit_init) != 1){
            sessionStorage.exit_init = 1;
            $("#exampleModal").modal()
        }

    }
}, false);</script>