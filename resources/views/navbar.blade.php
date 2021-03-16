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
  </div>
</nav>