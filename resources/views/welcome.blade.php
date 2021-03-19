<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>DRUGS API</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        {{-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> --}}
        {{-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script> --}}

        {{-- <link rel="stylesheet" href="css/index.css"> --}}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        @include('headers')

    <style>
    .col-md-auto {
        background-color:#dde4f0;
        width:100%;
    }
    </style>
    </head>
    <body>
            @include('navbar')
                    @if(request()->is('/'))
                        {{-- <div class="container"> --}}
                            {{-- <div class="col-md-auto"> --}}
                                @include('home')
                            {{-- </div> --}}
                        {{-- </div> --}}
                    @else
                    <div class="container">
                        <div class="col-md-auto">
                            @yield('content')
                            </div>
                    </div>
                    @endif
            <div>
            @include('footer')
            </div>
            <script>
                function onLogout(){
                    sessionStorage.clear();
                };
            </script>
    </body>
</html>
