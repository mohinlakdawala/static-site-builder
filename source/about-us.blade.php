@extends('_layouts.master')

@section('body')
<div class="container-fluid" id="example">    
    <h4>Alert Types</h4>
    <alert type="success">
        This is a <strong>success</strong> alert.
    </alert>
    <alert type="info">
        This is an <strong>info</strong> alert.
    </alert>
    <alert type="warning">
        This is a <strong>warning</strong> alert.
    </alert>
    <alert type="danger">
        This is a <strong>danger</strong> alert.
    </alert>

    <h4>No Animation</h4>
    <alert type="success" :animation="false">
        This is a <strong>success</strong> alert.
    </alert>

    <h4>Static</h4>
    <alert type="info" :dismissible="false">
        This is an <strong>info</strong> alert.
    </alert>

    <h4>Timeout</h4>
    <button class="btn btn-primary" @click="showAlert()">Show Alert</button>

    <alert v-if="show" type="danger"
           :timeout="4000"
           :on-closed="onClosed">
        This message should time out after 4 seconds.
    </alert>
@endsection