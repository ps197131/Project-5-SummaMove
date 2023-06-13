using SummaMoveWPF.Classes;
using SummaMoveWPF.Models;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows;

namespace SummaMoveWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        private SummaMoveDB _db = new SummaMoveDB();

        public List<Users> user = new List<Users>();
        public List<Oefeningen> oefeningenList = new List<Oefeningen>();

        public event PropertyChangedEventHandler PropertyChanged;

        protected void OnPropertyChanged([CallerMemberName] string name = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
        }

        private ObservableCollection<Users> _users = new ObservableCollection<Users>();

        public ObservableCollection<Users> Admin
        {
            get { return _users; }
            set { _users = value; OnPropertyChanged(); }
        }


        public MainWindow()
        {
            InitializeComponent();
            Setting();
            DataContext = this;
        }

        public void Setting()
        {
            foreach (Users u in _db.Getusers())
            {
                Admin.Add(u);
            }

            foreach (Oefeningen u in _db.GetAllOefeningen())
            {
                oefeningenList.Add(u);
            }

            //lstUsers.ItemsSource = user;
            lstOefeningen.ItemsSource = oefeningenList;
        }

    }
}
