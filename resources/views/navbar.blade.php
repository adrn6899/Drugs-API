<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <a class="navbar-brand" href="/">THE DRUGS API's</a>
<div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="{{route('open.fda.index')}}">Open FDA<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('rx.norm.index')}}">RX NORM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('medicines.index')}}">Medicine Database</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('interaction.index')}}">Interaction</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('drug.interactions')}}">Know your medicine</a>
      </li>
    </ul>
    @if(Auth::check())
      <a class="nav justify-content-end text-light" href="{{ route('logout') }}" id="logout-destroy" onclick="onLogout()"><i class="fa fa-sign-out-alt fa-2x"> Logout</i></a>
    @else
      <a class="nav justify-content-end text-light" href="{{ route('login') }}"><i class="fa fa-user-lock fa-2x"> Login</i></a>
    @endif
  </div>
</nav>