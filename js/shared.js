//START OF channel tab func
let activeChannelTab = 'tvnz1';
function openChannelTab ( tabName ) {
    if ( activeChannelTab != null ) {
        document.getElementById( activeChannelTab ).style.display = "none";
    }
    let x = document.getElementsByClassName( "channelLinks" );
    for ( i = 0; i < x.length; i++ ) {
        x[ i ].className = x[ i ].className.replace( " active", "" );
    }
    activeChannelTab = tabName;
    document.getElementById( activeChannelTab ).style.display = "block";
    event.currentTarget.className += " active";
}
//END OF channel tab func

//START OF content tab func
let activeContentTab = 'Content';
function openContentTab ( tabName ) {
    if ( activeContentTab != null ) {
        document.getElementById( activeContentTab ).style.display = "none";
    }
    let x = document.getElementsByClassName( "contentLinks" );
    for ( i = 0; i < x.length; i++ ) {
        x[ i ].className = x[ i ].className.replace( " active", "" );
    }
    activeContentTab = tabName;
    document.getElementById( activeContentTab ).style.display = "block";
    event.currentTarget.className += " active";
}
//END OF content tab func
